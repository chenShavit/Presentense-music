import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';
import * as myGlobals from '../../globals';
import InputChecker from '../../DataHelper/InputChecker';
import Translations from '../../Translations/Translations';

declare var $: any;

@Component({
    selector: 'profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    globals: {}
    bigTitle: string
    type: string = "4"
    challengesData: any
    notifications: any
    group: any
    isSocialSite: boolean

    constructor(public dataService: DataService, public route: ActivatedRoute, private router: Router) {
    }

    
    ngOnInit(): void {

        this.isSocialSite = true;

        this.globals = myGlobals
        if (this.dataService.user.isEmpty()) {
            if (this.dataService.getCookieObject('user') != null) {

                let id = setInterval(() => {
                    if (!this.dataService.user.isEmpty()) {
                        clearInterval(id);
                        this.initData();
                    }
                }, 200);

            } else {
                this.router.navigate(['']);
            }

        }
        else {
            this.initData();
        }
    }

    initData() {
        if (!this.dataService.user.gender) {
            this.dataService.user.gender = 'choose'
        }
        if (this.dataService.contest) {
            this.initContest();
        } else {
            this.getContest();
        }
    }

    initContest() {
        this.dataService.getContestUserNotification(this.dataService.user._id, this.dataService.contest._id)
            .then(res => {
                this.notifications = res;
            })
            .catch(err => {
                console.log('Failed to get notifications: ', err);
            });

        let groupId = '';

        let viralLink = this.dataService.getViralLink();
        if (viralLink) {
            if (viralLink.indexOf('?viral') != -1) {
                groupId = viralLink.split('?viralLink=')[1];
            }
            else {
                groupId = viralLink + "";
            }

            this.dataService.user.viralLink = viralLink;

            this.dataService.clearViralLink();
        }


        if (groupId) {
            this.dataService.getGroup(groupId)
                .then(res => {
                    this.group = res
                }).catch(err => console.log(err))
        } else {
            this.dataService.getUserGroups()
                .then(res => {
                    if (res) {
                        if (Array.isArray(res)) {
                            this.group = res[0] || this.getStubGroup()
                        } else {
                            this.group = res;
                        }
                    }

                }).catch(err => console.log(err))
        }
    }

    getContest() {
        this.dataService
            .getContest("4")
            .then(res => {
                this.initContest();
            })
            .catch(err => alert('error: ' + err));
    }

    toggleMenu() {

        $('.navigation-menup').toggleClass('open');

    }

    getStubGroup(): any {

        return null;
        // return {
        //     "_id": "5a6a8d0abc6417bf8fa94c67",
        //     "name": "5a6a8c7dbc6417bf8fa94c64",
        //     "contest": "5a2fe429137c2c1cd0e9146a",
        //     "admin": "5a6a8c7dbc6417bf8fa94c64",
        //     "status": "active",
        //     "users": [
        //         {
        //             email: "ajkshfhasf"
        //         },
        //         {
        //             email: "ajkshfhasf"
        //         }
        //     ]
        // };
    }

    createGroup(): void {
        this.dataService.sendAnalyticsEvent('חברתי', 'איזור אישי', 'צור קבוצה', 'auto_event');
        this.dataService.createGroup().then(resu => {
            var viral = this.dataService.user.viralLink.split('?viralLink=')[1];
            this.dataService.getGroup(viral).then(res => {
                this.group = res
            }).catch(err => console.log(err))
        }).catch(err => console.log(err));
    }

    ableToCreateGroup(): boolean {
        return !this.group && !this.dataService.user.viralLink;
    }

    saveProfile() {
        // dont delete this
        // will cause compilation errors
    }


}
