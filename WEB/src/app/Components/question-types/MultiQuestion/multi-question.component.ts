import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../../data.service';
import { Router } from '@angular/router';
import * as myGlobals from '../../../globals';
import InputChecker from '../../../DataHelper/InputChecker';
import Translations from '../../../Translations/Translations';


@Component({
    selector: 'multi-question',
    templateUrl: './multi-question.component.html',
    styleUrls: ['./multi-question.component.css']
})
export class MultiQuestionComponent implements OnInit {
    globals: {}
    bigTitle: string
    challengesData: any
    @Input() stage: any = {}
    @Input() hideSend?: boolean = false;
    @Output() answer = new EventEmitter<any>()
    options: any = []

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
        return this.options.filter((option: any) => option.checked == true)[0] == undefined
    }

    answered(): void {
        let answers: any = [];
        this.options.forEach((option: any) => {
            if (option.checked)
                answers.push(option.text);
        });
        if (answers)
            this.answer.emit(answers);
    }

    get getAnswers() {
        let answers: any = [];
        this.options.forEach((option: any) => {
            if (option.checked)
                answers.push(option.text);
        });
        return { stage: this.stage, answers: answers };
    }
}