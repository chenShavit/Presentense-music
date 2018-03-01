
import { Component, OnInit, NgZone } from '@angular/core';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import UserDataModel from '../../DataModels/UserDataModel';
import * as myGlobals from '../../globals';

@Component({
  selector: 'popup-connect',
  templateUrl: './popup-connect.component.html',
  styleUrls: ['./popup-connect.component.css']
})
export class ConnectComponent implements OnInit {
  globals: any;
  user: UserDataModel = new UserDataModel();
  constructor(route: ActivatedRoute, public dataService: DataService, private router: Router, private _ngZone: NgZone) {

  }

  ngOnInit(): void {
    this.user = new UserDataModel();
    this.globals = myGlobals;
  }
  onSuccessFacebookLogin(facebookUser: any): void {
    if (!this.dataService.showPopupSign && this.dataService.showPopup) {
      if (facebookUser && facebookUser.email && facebookUser.password ) {
        this.user.email = facebookUser.email;
        this.user.password = facebookUser.password;
        this.loginSubmitted();
      }
    }
  }


  onSignIn(googleUser: any): void {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    
  }


  loginSubmitted(): void {
    if (this.user.email && this.user.password) {
      let that = this;
      this.dataService.login(this.user)
        .then((user: UserDataModel) => {
        this._ngZone.run(() => {
          this.dataService.showPopup = false;
        });

          this.dataService.sendAnalyticsEvent(this.dataService.getChallengeName(),'התחבר','לחיצה', 'auto_event')
          this.dataService.sendGoogleTagEventUID(this.dataService.user._id,'UID')
        })
        .catch(function (reason) {
          that.dataService.logOut();
          that.user = new UserDataModel()
          that.dataService.alertMessage = "בעיה בהתחברות: ";
          that.dataService.alertSubMessage = JSON.parse(reason._body).error;
          that.dataService.showGenericPopup = true;
        });
    }
  }

  forgotPassword(): void {
    this.dataService.showPopup = false;
    this.router.navigate(['forgot', this.dataService.type])
  }

  close(): void {
    this.dataService.showPopup = false;
    this.router.navigate([''])
  }
}
