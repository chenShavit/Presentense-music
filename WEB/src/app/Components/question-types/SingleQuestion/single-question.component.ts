import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../../data.service';
import { Router } from '@angular/router';
import * as myGlobals from '../../../globals';
import InputChecker from '../../../DataHelper/InputChecker';
import Translations from '../../../Translations/Translations';


@Component({
    selector: 'single-question',
    templateUrl: './single-question.component.html',
    styleUrls: ['./single-question.component.css']
})
export class SingleQuestionComponent implements OnInit {
    globals: {}
    bigTitle: string
    type: string
    @Input() stage: any = {}
    @Input() hideSend?: boolean = false;
    @Output() answer = new EventEmitter<any>();
    options: any = []
    selected: any

    constructor(public dataService: DataService, public route: ActivatedRoute) {
    }
    ngOnInit(): void {
        if (this.stage[this.dataService.getText(this.dataService.challengesData[this.dataService.type].multi.options)]) {
            this.stage[this.dataService.getText(this.dataService.challengesData[this.dataService.type].multi.options)].forEach((option: any, index: any) => {
                if (!this.options[index])
                    this.options.push({ text: option, checked: false })
            })
        }
    }
    shouldDisable(): boolean {
        return this.selected == undefined;
    }

    answered(): void {
        if (this.selected) {
            this.answer.emit([this.selected]);
            this.dataService.sendAnalyticsEvent(this.dataService.getChallengeName(),this.stage[this.dataService.getText(this.dataService.challengesData[this.dataService.type].stage.question)],'סיום משימה','auto_event')
        }
    }


     get getAnswers(){
         return {stage:this.stage,answers:this.selected}
     }
}

