
import { Component, OnInit, NgZone } from '@angular/core';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import * as myGlobals from '../../globals';
import UserDataModel from '../../DataModels/UserDataModel';

@Component({
    selector: 'popup-finish-challenge',
    templateUrl: './popup-finish-challenge.component.html',
    styleUrls: ['./popup-finish-challenge.component.css']
})
export class PopupFinishChallenge implements OnInit {

    constructor(route: ActivatedRoute, public dataService: DataService, private router: Router) {
    }

    ngOnInit(): void {

    }

    submitForm(): void {
       
    }
    
    updateUserPhone(): void {
        this.dataService
        .updateUserPhoneNumber()
        .then((res:any)=>{
            this.dataService.copy('music.challengim.co.il')
            this.dataService.alertMessage = "הטלפון עודכן!";
            this.dataService.alertSubMessage = "";
            this.dataService.genericPopUpIsSuccess = true;
            this.dataService.showGenericPopup = true;
        })
        .catch();
    }

    goToHome(): void {
        this.router.navigate(['']);
    }

    copyLink(): void {
        this.dataService.copy('music.challengim.co.il')
        this.dataService.alertMessage = "הלינק הועתק לClipboard!";
        this.dataService.alertSubMessage = "";
        this.dataService.genericPopUpIsSuccess = true;
        this.dataService.showGenericPopup = true;
    }

    analyticsEventSend(eventName: string): void {
        if (!this.dataService.finishAlreadySent) {
            this.dataService.finishAlreadySent = true
            this.dataService.sendAnalyticsEvent(this.dataService.getChallengeName(),eventName,'שלח','auto_event')
        }
      }

    analyticsEventClick(eventName: string): void {
        this.dataService.sendAnalyticsEvent(this.dataService.getChallengeName(),eventName,'לחיצה','auto_event')
    }
}
