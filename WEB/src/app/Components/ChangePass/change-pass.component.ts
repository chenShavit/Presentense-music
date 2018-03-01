import { Component, OnInit, Input, NgZone } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';
import * as myGlobals from '../../globals';
import InputChecker from '../../DataHelper/InputChecker';
import Translations from '../../Translations/Translations';
import UserDataModel from '../../DataModels/UserDataModel';

@Component({
  selector: 'change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.css']
})
export class ChangePassComponent implements OnInit {
  globals: any
  user: UserDataModel = new UserDataModel()

  constructor(private route: ActivatedRoute, public dataService: DataService, private router: Router, private _ngZone: NgZone) {
  }

  ngOnInit(): void {
    this.user = this.dataService.user;
    this.globals = myGlobals;
    if (!this.dataService.type)
      this.router.navigate(['', this.route.snapshot.params['type']]);

  }

  changePassword(): void {
    if ((this.dataService.user['current_password'] && this.dataService.user['new_password'] && this.dataService.user['confirm_password']))
      var that = this;
    this.dataService.changePassword(this.user)
      .then((user: UserDataModel) => {
        that.dataService.alertMessage = "הסיסמא שונתה בהצלחה";
        that.dataService.alertSubMessage = "";
        that.dataService.genericPopUpIsSuccess = true;
        that.dataService.showGenericPopup = true;
        that.router.navigate(['profile'])
      })
      .catch(function (reason) {
        that.dataService.alertMessage = "אירעה שגיאה בעת שינוי הסיסמא:";
        that.dataService.alertSubMessage = JSON.parse(reason._body).error;
        that.dataService.showGenericPopup = true;
      });;
  }
}
