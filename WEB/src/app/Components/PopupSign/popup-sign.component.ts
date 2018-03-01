import { Component, OnInit, Input, NgZone, OnDestroy, OnChanges, DoCheck } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';
import * as myGlobals from '../../globals';
import InputChecker from '../../DataHelper/InputChecker';
import UserDataModel from '../../DataModels/UserDataModel';
import { Subscription } from 'rxjs/Subscription';
import { window } from 'rxjs/operator/window';
declare var $: any;
@Component({
  selector: 'popup-sign',
  templateUrl: './popup-sign.component.html',
  styleUrls: ['./popup-sign.component.css']
})

export class SignupComponent implements OnInit, DoCheck {
  signupStep: number
  user: UserDataModel = new UserDataModel();
  globals: any
  termsConfirmed: boolean
  hideUsernameField: boolean = false
  constructor(route: ActivatedRoute, public dataService: DataService, private router: Router, private _ngZone: NgZone) {
  }

  ngOnInit(): void {
    if (!myGlobals.isDesktop) {
      $(document.body).css('position', 'fixed');
    }


    this.globals = myGlobals;
    this.signupStep = 1
    this.user = this.dataService.user;
  }

  ngDoCheck() {
    if (!myGlobals.isDesktop) {

      if (this.dataService.showPopupSign) {
        $(document.body).css('position', 'fixed');
      } else {
        $(document.body).css('position', 'unset');
      }
    }
  }



  onFacebookSignup(facebookUser: any) {
    if (this.dataService.showPopupSign && !this.dataService.showPopup) {
      let that = this
      if (facebookUser.email) {
        this.user.email = facebookUser.email ? facebookUser.email : '';
        this.user.password = facebookUser.id ? facebookUser.id : '';
        this.user.name = facebookUser.name ? facebookUser.name : '';
        this.user.gender = facebookUser.gender ? facebookUser.gender : 'male';
        this.user.birthday = facebookUser.birthday ? new Date(facebookUser.birthday) : new Date();
        this.user.city = facebookUser.hometown ? facebookUser.hometown.name : '';

       

        this.dataService.createUser(this.user)
          .then((user: UserDataModel) => {
            this.user = user;
            this.dataService.sendAnalyticsEvent(this.dataService.getChallengeName(), 'הרשם', 'לחיצה', 'auto_event');
            this.dataService.sendGoogleTagEventUID(this.dataService.user._id, 'UID');
            this._ngZone.run(() => {
              this.dataService.showPopupSign = false;
              this.router.navigate(['question-flow', this.dataService.type])
            });
          }).catch(function (reason: any) {
            that.dataService.logOut();
            that.user = that.dataService.user;
            that.dataService.showPopupSign = false;
            var error = JSON.parse(reason._body).error;
            if (error == 'User already exists') {
              error = 'משתמש עם כתובת המייל שהוזנה כבר קיים במערכת';
            }
            that.dataService.alertMessage = 'בעיה ברישום: ';
            that.dataService.alertSubMessage = error;
            that._ngZone.run(() => {
              that.dataService.showPopupSign = false;
              that.dataService.showGenericPopup = true;
            });
          })
      }
      this._ngZone.run(() => { });
    }
  }



  onGoogleSignup(facebookUser: any) {
    if (this.dataService.showPopupSign && !this.dataService.showPopup) {

      this.dataService.showPopupSign = false;
      this.router.navigate(['question-flow', this.dataService.type])
      this.dataService.sendAnalyticsEvent(this.dataService.getChallengeName(), "הרשם", 'לחיצה', 'auto_event')
      this.dataService.sendGoogleTagEventUID(this.dataService.user._id, 'UID');


    }
    this._ngZone.run(() => { });
  }




  signupSubmitted(): void {
    if (!this.termsConfirmed) {
      this.dataService.alertMessage = this.dataService.getText('didntReadTheTerms');
      this.dataService.alertSubMessage = "";
      this.dataService.showGenericPopup = true;
    }
    else {
      if (this.user.email && this.user.password) {
        let that = this;
        this.dataService.createUser(this.user)
          .then((user: UserDataModel) => {
            that.router.navigate(['question-flow', this.dataService.type])

            that.dataService.showPopupSign = false
            that.dataService.notifyOther({ option: 'onSubmit', value: 'From Signup' });

            that.dataService.sendAnalyticsEvent(that.dataService.getChallengeName(), 'הרשם', 'לחיצה', 'auto_event');
            this.dataService.sendGoogleTagEventUID(this.dataService.user._id, 'UID');

          })
          .catch(function (reason: any) {
            that.dataService.logOut();
            that.dataService.showPopup = false;
            var error = JSON.parse(reason._body).error;
            if (error == 'User validation failed: email: invalid email address') {
              error = 'נראה שהקלדת כתובת מייל לא תקינה';
            }
            if (error == 'User already exists') {
              error = 'משתמש עם כתובת המייל שהוזנה כבר קיים במערכת';
            }
            that.dataService.alertMessage = 'בעיה ברישום: ';
            that.dataService.alertSubMessage = error;
            that.dataService.showGenericPopup = true;
          });
      }
    }
  }

  disableSignButton(): boolean {
    return (!((this.user.email && this.user.password) && this.termsConfirmed));
  }

  gotoTerms(): void {
    this.router.navigate(['terms'])
    this.dataService.showPopupSign = false;
  }

  close(): void {
    if (!myGlobals.isDesktop) {
      $(document.body).css('position', 'initial');
    }
    this.router.navigate([''])
    this.dataService.user.email = null;
    this.dataService.user.password = null;
    this.user.email = null;;
    this.user.password = null;
    this.dataService.showPopupSign = false;
  }
}
