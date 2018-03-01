import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';
import * as myGlobals from '../../globals';
import InputChecker from '../../DataHelper/InputChecker';
import Translations from '../../Translations/Translations';

declare var $: any;

@Component({
    selector: 'my-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    globals: any
    bigTitle: string
    type: string
    challengesData: any
    contest: any

    constructor(public dataService: DataService, public route: ActivatedRoute, private router: Router) {
    }


    toggleMenu() {

        $('.navigation-menup').toggleClass('open');
    }

    ngOnInit(): void {
        // if (window.location.hostname.indexOf('soccer') != -1) {
        //     this.dataService.type = '1';
        //     document.title = "Soccer Challenge";
        // }
        // if (window.location.hostname.indexOf('social') != -1) {
            this.dataService.type = '5';
            document.title = "אתגר המוזיקה";
        // }
        // if (window.location.hostname.indexOf('challenge15') != -1) {
        //     document.title = "15 Challenge";
        //     if (!this.route.snapshot.queryParams.pass) {
        //         this.router.navigate(['15'])
        //     }
        // }

        if (this.route.snapshot.queryParams) {
            var viralLink = this.route.snapshot.queryParams.viralLink;

            if (viralLink) {
                this.dataService.saveViralLink(viralLink);
                this.dataService.user.viralLink = viralLink;
            }

        }
        this.type = this.dataService.type


        this.globals = myGlobals
        this.challengesData = this.dataService.challengesData[this.dataService.type];
        this.dataService.getContest(this.type)
            .then(contest => {
                this.contest = contest;
            }).catch(err => {
                console.log('failed to fetch contest data: ', err);
            });
    }

    analyticsEvent(eventName: string, label?: string): void {
        this.dataService.sendAnalyticsEvent(this.dataService.getChallengeName(), eventName, label ? label : 'לחיצה', 'auto_event')
    }

    defaultQuestionClicked(): void {

        this.analyticsEvent('שאלת פתיחה', 'סיום משימה')
        if (this.dataService.user.isEmpty()) {
            this.dataService.showSignupPopup();
        }
        else {
            this.router.navigate(['question-flow', this.dataService.type])
        }

    }
}
