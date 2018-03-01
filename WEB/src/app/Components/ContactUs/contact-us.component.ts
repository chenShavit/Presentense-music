import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';
import * as myGlobals from '../../globals';

declare var $: any;


@Component({
  selector: 'contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})

export class ContactUsComponent implements OnInit {
    globals: {};
    bigTitle: string;
    type: string;
    challengesData: any;


    constructor(public dataService: DataService, public route: ActivatedRoute) {
    }
    ngOnInit(): void {

    }


    sendContactUsForm() : void {
      var isEmailValid = this.validateEmail(this.objectifyForm($('#contactForm')[0])['email'])
      if (!isEmailValid) {
            this.dataService.alertMessage = "אנא הזן כתובת מייל תקינה";
            this.dataService.alertSubMessage = "";
            this.dataService.genericPopUpIsSuccess = false;
            this.dataService.showGenericPopup = true;
            return
      }
            this.dataService.sendContactUsForm(this.objectifyForm($('#contactForm')[0]))
            this.dataService.showPopupContac = false;
            this.dataService.alertMessage = "תודה! קיבלנו ונהיה בקשר ממש בקרוב";
            this.dataService.alertSubMessage = "";
            this.dataService.genericPopUpIsSuccess = true;
            this.dataService.showGenericPopup = true;

            this.dataService.sendAnalyticsEvent('יצירת קשר','דברו איתנו','שליחה','auto_event')
    }

    validateEmail(email:any):boolean {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }

    objectifyForm(formArray:any) : {} {//serialize data function

        var returnArray = {};
        for (var i = 0; i < formArray.length; i++){
          returnArray[formArray[i]['name']] = formArray[i]['value'];
        }
        return returnArray;
      }



}
