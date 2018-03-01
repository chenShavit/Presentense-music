import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../data.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as myGlobals from '../../globals';
import InputChecker from '../../DataHelper/InputChecker';
import Translations from '../../Translations/Translations';
import UserDataModel from '../../DataModels/UserDataModel';
import { Output } from '@angular/core/src/metadata/directives';
import { EventEmitter } from '@angular/core/src/event_emitter';
import { setTimeout } from 'timers';
import { Subscription } from 'rxjs/Subscription';

declare var $:any;

@Component({
    selector: 'question-flow',
    templateUrl: './question-flow.component.html',
    styleUrls: ['./question-flow.component.css']
})
export class QuestionFlowComponent implements OnInit {
    globals: any
    bigTitle: string
    type: string
    challengesData: any
    user: UserDataModel = new UserDataModel()
    contest: any
    stages: any
    stage: any
    showCongrats: boolean = false
    showFailed: boolean = false
    showSent: boolean = false
    private subscription: Subscription;

    constructor(public dataService: DataService, private router: Router, private route: ActivatedRoute) {
    }

    ngOnInit(): void {

        this.globals = myGlobals
            this.dataService.type = '5'

        this.type = this.dataService.type


        this.loadUserDetails()


        this.subscription = this.dataService.notifyObservable$.subscribe((res) => {
            if (res.hasOwnProperty('option') && res.option === 'onSubmit' && res.value == 'From Signup') {
                this.loadUserDetails()
            }
        });



        // Get existing session
        // Handle result same as question answered..
        // 
    }


    toggleMenu() {
        $('.navigation-menup').toggleClass('open');
    }


    loadUserDetails(): void {
        this.getUserSafe((err: any, user: UserDataModel) => {

            this.user = user || this.dataService.user;
            if (this.user.email.length == 0 && !this.dataService.showPopupSign && !this.dataService.showPopupSign) {
                this.router.navigate([''])
            }

            if (this.user.contest_stages) {
               
                this.user['contest_stages_map'] = this.toStagesMap(this.user.contest_stages);
            }
            else {
                return
            }

            this.dataService.getContest(this.type).then(res => {
                this.contest = res;
                if (this.contest.stages) {
                    this.stages = this.contest.stages;
                   // this.stage = this.stages[1];
                   //  if (this.user['contest_stages_map'][this.type]['stage'] <= this.stages.length) {
                         this.stage = this.stages[this.user['contest_stages_map']['5']['stage']]
                    // }
                    // else {
                    //     this.showSent = true;
                    // }
                }
            }).catch(err => alert('error: ' + err));
        })
    }

    stageUp(): void {
        this.user.contest_stages[0].stage = parseInt(this.user.contest_stages[0].stage)
    }

    scrollTop(): void {
        window.scrollTo(0, 450);
    }

    question_answered(resp: any): void {

        window.scrollTo(0, 450);


        var that = this

        /*if (resp.isOnChallenge) { // pass anyway
            this.showSent = true;

                that.showSent = false;
                that.user['contest_stages_map'][this.type] = String(parseInt(that.user['contest_stages_map'][this.type])+1)
                that.stage = this.stages[this.user['contest_stages_map'][this.type]]
                that.user.contest_stages[+this.type-1].stage = String(parseInt(that.user.contest_stages[+this.type-1].stage) + 1)
        }*/


        switch (resp.continue) {
            case 'any':
                this.user['contest_stages_map'] = this.toStagesMap(resp.user.contest_stages);
                this.stage = this.stages[this.user['contest_stages_map']['5']['stage']]
                this.showCongrats = true;
                this.user.contest_stages = resp.user.contest_stages
                break;
            case 'correct':
                switch (resp.result) {
                    case 'failed':
                        this.showFailed = true;
                        break;
                    case 'passed':
                        this.user = this.user || this.dataService.user;
                        this.user['contest_stages_map'] = this.toStagesMap(resp.user.contest_stages);
                        this.stage = this.stages[this.user['contest_stages_map']['5']['stage']]
                        this.showCongrats = true;
                        this.user.contest_stages = resp.user.contest_stages
                        break;
                    case 'noResult':
                        this.showSent = true;
                        break;
                }
                break;
            case 'date':
                this.showSent = true;
                break;
            case 'correct-date':
                this.showSent = true;
                break;
        }

        // whenever admin has to approve question user is present with tshuvatcha page..
        // Otherwise he pass the stage 
        // Otherwise he waits and present the wait page.
        // switch (this.stage.question_type) {
    }

    toStagesMap(objArr: any): any {
        let mappingObject = {};
        objArr.map((obj: any) => {
            var mapKey = ''
            var mapVal = {}
            for (let key in obj) {
                if (key === 'contest_index')
                    mapKey = obj[key];
                if (key === 'stage')
                    mapVal = { stage: String(obj[key] - 1) };
                if (key === 'onPisa')
                    mapVal['onPisa'] = obj[key];
            }
            mappingObject[mapKey] = mapVal;
        })
        return mappingObject;
    }


    getUserSafe(cb: Function) {
        let user = this.user || this.dataService.user;

        if (user.isEmpty() && this.dataService.getCookieObject('user')) {
            this.dataService
                .getUser(this.dataService.getCookieObject('user'))
                .then((u) => {
                    cb(null, u)
                })
                .catch(e => {

                    // TODO handle error
                    cb(e);

                })
        } else {
            cb(null, user);
        }
    }
}
