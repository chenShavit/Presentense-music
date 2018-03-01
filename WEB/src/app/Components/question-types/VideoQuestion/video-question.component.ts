import { Component, OnInit, Input, Output, EventEmitter, ViewChildren, Query, QueryList } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../../data.service';
import { Router } from '@angular/router';
import * as myGlobals from '../../../globals';
import InputChecker from '../../../DataHelper/InputChecker';
import Translations from '../../../Translations/Translations';

@Component({
    selector: 'video-question',
    templateUrl: './video-question.component.html',
    styleUrls: ['./video-question.component.css']
})
export class VideoQuestionComponent implements OnInit {
    globals: {}
    bigTitle: string
    type: string
    challengesData: any
    // @Input() stage: any = {}
    stage: any = {}
    @Output() answer = new EventEmitter<any>();
    answers: Array<any> = []
    @Input() choosenCardIndex: number;
    @Input() answeredIndexes: any;
    @ViewChildren('q') questions: QueryList<any>


    texts: any;

    constructor(
        public dataService: DataService,
        public route: ActivatedRoute,
        private router: Router,
        private sanitizer: DomSanitizer
    ) {
        this.stage = this.getStub();

        console.log('lkajskfj',this.choosenCardIndex)
    }

    ngOnInit(): void {
        if (this.dataService.type) {
            this.type = this.dataService.type
            this.dataService.sendGoogleTagVirtualPage(this.dataService.user.contest_stages[0].stage + 1, this.stage.stage_details, this.stage.question_text)
        }

    }

    shouldDisable(allAnswers?: any): boolean {
        allAnswers = this.mapAllAnswers()
        if (allAnswers) {
            return this.answers.length == 0 && (!allAnswers[1] || allAnswers[1].length == 0);
        } else {
            return this.answers.length == 0;
        }
    }

    mapAllAnswers(): any {
        let allAnswers;
        if (this.questions) {
            return allAnswers = this.questions.map(q => {
                let ans;
                // type free_text
                if (q.answers) {
                    ans = [q.answers];
                }
                // type select
                else if (q.selected) {
                    ans = [q.selected];
                }
                // type multi-select
                else if (q.options) {
                    ans = q.options
                        // get selected
                        .filter((option: any) => { return option.checked })
                        // return selected options' text
                        .map((option: any) => { return option.text });
                }

                return ans;
            });
        }
    }

    answered(): void {

        let allAnswers = this.mapAllAnswers()

        if (this.shouldDisable(allAnswers)) {
            return
        }

        this.answer.emit(allAnswers)

    }

    videoUrl() {

        let url: string = this.stage.video_url;
        url = this.fixUrl(url);
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }


    fixUrl(url: string): string {
        if (!url) {
            return '';
        }

        if (/youtube/.test(url)) {
            url = url.replace('watch?v=', 'embed/')
        }

        return url;
    }


    getStub() {
        let json = '{"_id":"5a3172f3621bcf600fa81848","updatedAt":"2017-12-14T11:39:10.909Z","createdAt":"2017-12-13T18:35:31.952Z","question_type":"video","video_url":"http://ec2-34-249-91-71.eu-west-1.compute.amazonaws.com/Video/soccer.mp4","times_to_watch":2,"question_text":"משימת הפלייליסט, נראה אתכם מרימים מסיבה!","stage_details":"הפלייליסט המנצח מוכן","image":"https://presentense-stage-images.s3-us-west-2.amazonaws.com/Screen%20Shot%202017-12-10%20at%2019.56.23.1513190093138.png","from":"2017-12-13T00:00:00.000Z","to":"2017-12-16T00:00:00.000Z","continue_when":"correct","max_participants":3,"max_winners":2,"pass_level_code":"FSHDI","index":4,"video_question":[{"video_type":"file","question_text":"להעלאת הקובץ בכל פורמט שהוא:","question_text_arabic":"هل صورت التحدي؟ هيا، نحن ننتظر لنرى","_id":"5a3172f3621bcf600fa8184e","multi_options":[],"correct_answer":[],"select":[]},{"video_type":"free_text","question_text":"","question_text_arabic":"من توفي في إنستوش، على يوتيوب أو في باس؟ الرابط هو أيضا كبيرة!","multi_options":[],"correct_answer":[],"select":[]}],"cases":[],"multi_options":[],"correct_answer":[],"select":[],"pisa_questions_difficulty":["medium"],"status":"active","__v":0}'

        return JSON.parse(json);
    }


    questionAnswered(answers: any) {
        this.answers = answers;
        //this.answer.emit(answers)
    }


}
