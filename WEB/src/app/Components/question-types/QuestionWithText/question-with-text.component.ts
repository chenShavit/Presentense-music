import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../../data.service';
import { Router } from '@angular/router';
import * as myGlobals from '../../../globals';
import InputChecker from '../../../DataHelper/InputChecker';
import Translations from '../../../Translations/Translations';


@Component({
    selector: 'question-with-text',
    templateUrl: './question-with-text.component.html',
    styleUrls: ['./question-with-text.component.css']
})
export class QuestionWithTextComponent implements OnInit {
    globals: {}
    bigTitle: string
    type: string
    challengesData: any
    @Input() stage: any = {}
     @Input() hideSend?: boolean = false;
    @Output() answer = new EventEmitter<any>();
    @Input() answerData: any;

    answers: any = ''

    constructor(public dataService: DataService, public route: ActivatedRoute, private router: Router) {
    }
    ngOnInit(): void {
        if (this.dataService.type)
            this.type = this.dataService.type

        
            if (this.answerData) {
                this.answers = this.answerData
            }
    }

    shouldDisable(): boolean {
        return this.answers == ''
    }

    answered(): void {
        if (this.answers) {
            this.answer.emit([this.answers])
            this.dataService.sendAnalyticsEvent(this.dataService.getChallengeName(),this.stage[this.dataService.getText(this.dataService.challengesData[this.dataService.type].stage.question)],'סיום משימה','auto_event')
        }
    }


    get getAnswers() {
        return { stage: this.stage, answers: this.answers };
    }
}
