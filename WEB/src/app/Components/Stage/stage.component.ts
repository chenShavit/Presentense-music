import { Component, OnInit, Input, Output, EventEmitter, ViewChildren, Query, QueryList } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';
import * as myGlobals from '../../globals';
import InputChecker from '../../DataHelper/InputChecker';
import Translations from '../../Translations/Translations';
import S3FileUpload from '../../FileUpload/S3FileUpload';

@Component({
    selector: 'stage',
    templateUrl: './stage.component.html',
    styleUrls: ['./stage.component.css']
})
export class StageComponent implements OnInit {
    globals: any
    bigTitle: string
    type: string
    challengesData: any
    showVideoCard: boolean
    showPisaCard: boolean
    answeredIndexes: any = { 0: {}, 1: {} }
    earnedPoints: number = 0
    choosenCardIndex: number = 0
    showFinishChallenge: boolean
    choosenCardSection: number
    @Input() stage: any = {}
    @Output() answer = new EventEmitter<any>();
    @Input() showSent: boolean = false
    @Input() showNotYet: boolean = false
    @ViewChildren('questionWithCard') questionWithCard: QueryList<any>


    constructor(public dataService: DataService, public route: ActivatedRoute) {
    }

    ngOnInit(): void {
        if (this.route.snapshot.params['type']) {
            this.globals = myGlobals
            this.type = this.route.snapshot.params['type']
            this.dataService.type = this.type
            this.challengesData = this.dataService.challengesData[this.dataService.type]
            if (this.stage.question_type == 'missions') {
                this.getMissionProgress();
                this.dataService.sendGoogleTagVirtualPage(this.stage.index + 1, this.stage.stage_details)
            } else {
                this.dataService.sendGoogleTagVirtualPage(this.stage.index + 1, this.stage.question_text)
            }
        }
    }

    /**
     * Make data service call to update server with answer.
     * @param answers
     */
    questionAnswered(answers: any): void {//Pass answer.
        // this.answered = true;
        if (this.showVideoCard || this.showPisaCard) { // card answered
            this.showVideoCard = false;
            this.showPisaCard = false;

            let pointsToAdd = 100;
            if (this.choosenCardSection==1) [
                pointsToAdd = 200
            ]
            if(this.answeredIndexes[this.choosenCardSection][this.choosenCardIndex]){
                pointsToAdd = 0;
            }
            this.answeredIndexes[this.choosenCardSection][this.choosenCardIndex] = answers
            this.earnedPoints = this.earnedPoints || 0;

            switch (this.choosenCardSection) {
                case 0: // pisa
                    this.earnedPoints = this.earnedPoints + pointsToAdd;
                    this.dataService.sendAnalyticsEvent(
                        this.dataService.getChallengeName(),
                        "1",
                        'סיום משימת 100',
                        'auto_event'
                    )
                    this.dataService
                        .saveMissionProgress(this.answeredIndexes, this.earnedPoints)
                        .then((res) => {
                            this.answeredIndexes = res.answered;
                            this.earnedPoints = res.earnedPoints;
                        });
                    break;
                case 1: // video
                    this.dataService
                        .questionAnswered({
                            stage: this.stage,
                            answers: answers,
                            user: this.dataService.user,
                            contest: this.dataService.contest
                        })
                        .then(res => {

                            this.earnedPoints = this.earnedPoints + pointsToAdd;
                            // update progress 
                            this.dataService.saveMissionProgress(this.answeredIndexes, this.earnedPoints)
                                .then((res) => {
                                    this.answeredIndexes = res.answered;
                                    this.earnedPoints = res.earnedPoints;
                                });
                        })
                        .catch(err => console.log('err: ', err));

                    this.dataService.sendAnalyticsEvent(
                        this.dataService.getChallengeName(),
                        "1",
                        'סיום משימת 200', 'auto_event'
                    );
                    break;

                default:
                    break;
            }
        }
        else {
            this.dataService.questionAnswered({ stage: this.stage, answers: answers, user: this.dataService.user, contest: this.dataService.contest }).then(res => {

                this.answer.emit(res)
            }).catch(err => console.log('err: ', err));
        }
    }


    getMissionProgress() {
        this.dataService.getMissionProgress()
            .then((res) => {
                if (res.answered) {
                    this.answeredIndexes = res.answered;
                    this.earnedPoints = res.earnedPoints;
                }

            })
            .catch((e) => {
                console.error('gmp');
            });
    }


    showCard(type: string): void {
        switch (type) {
            case 'video':
                this.showVideoCard = true
                break;
            case 'pisa':
                this.showPisaCard = true
                break;
            default:
                break;
        }
        window.scrollTo(0, 450);
    }

    updateChoosenCardIndex(clickedIndex: {}): void {
        this.choosenCardIndex = clickedIndex['index']
        this.choosenCardSection = clickedIndex['section']
    }

    uploadFiles(files: Array<File>) {


        /*this.uploader.uploadMultiple(files, (err: any, results: Array<any>) => {
            if (err) {
                return console.log('Error uploading files', err);
            }

            console.log('file upload success')
        })*/
    }
}
