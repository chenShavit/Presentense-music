import { Component, OnInit, NgZone } from '@angular/core';
import { DataService } from '../../data.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as myGlobals from '../../globals';
import UserDataModel from '../../DataModels/UserDataModel';

@Component({
  selector: 'forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  email: string = ''
  globals: any
  user: UserDataModel = new UserDataModel();
  clicked: boolean = false

  constructor(private route: ActivatedRoute, public dataService: DataService, private router: Router) {
  }

  ngOnInit(): void {
    this.user = this.dataService.user;
    this.globals = myGlobals;
    if (!this.dataService.type)
      this.router.navigate(['', this.route.snapshot.params['type']]);
  }

  forgotPassword(): void {
    if (this.user.email && !this.clicked) {
      this.clicked = true;
      var that = this;
      this.dataService.forgotPassword(this.user.email)
        .then(result => {
          if (result) {
            this.dataService.genericPopUpIsSuccess = true;
            this.dataService.alertMessage = "הסיסמא אופסה בהצלחה";
            this.dataService.alertSubMessage = "";
            this.dataService.showGenericPopup = true;
            this.dataService.user = new UserDataModel();
            this.router.navigate(['', this.dataService.type]);
            this.dataService.sendAnalyticsEvent(this.dataService.getChallengeName(),'איפוס סיסמא','שליחה','auto_event')
          }
        }).catch(function (reason) {
          that.dataService.alertMessage = "אירעה שגיאה בעת איפוס הסיסמא";
          that.dataService.alertSubMessage = JSON.parse(reason._body).error;
          that.dataService.showGenericPopup = true;
          that.clicked = false;
        });;
    }
  }
}