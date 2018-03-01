import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';
import * as myGlobals from '../../globals';
import InputChecker from '../../DataHelper/InputChecker';
import Translations from '../../Translations/Translations';


@Component({
    selector: 'pisa-questions',
    templateUrl: './pisa-questions.component.html',
    styleUrls: ['./pisa-questions.component.css']
})
export class PisaQuestionsComponent implements OnInit {

    level: number;
    levels: [{ class: string, name: string, titleHe: string, titleAr: string }] = [
        { class: "veryhard button-3p levelp group w-button", name: 'very-hard', titleHe: "קשה מאוד", titleAr: "" },
        { class: "hard button-3p levelp group w-button", name: 'hard', titleHe: "קשה", titleAr: "" },
        { class: "average button-3p levelp group w-button", name: 'medium', titleHe: "ממוצע", titleAr: "" },
        { class: "easy button-3p levelp group w-button", name: 'easy', titleHe: "קל", titleAr: "" },
        { class: "easy very button-3p levelp group w-button", name: 'very-easy', titleHe: "קל מאוד", titleAr: "" }
    ];

    questions: Array<any> = [];

    constructor(public dataService: DataService, public route: ActivatedRoute, private router: Router) {
    }

    ngOnInit(): void {

        let sub = this.route.params.subscribe(params => {
            this.level = params['type'] -1; // (+) converts string 'id' to a number
            this.changeLevel(this.levels[this.level]);

            this.levels.forEach((l,i)=>{
                 let classes = l.class.split(' '); 
                if(i == this.level){
                    classes.push('selected');
                }else{
                    classes = classes.filter(clazz=>{
                        return clazz != 'selected';
                    })
                }
                l.class = classes.join(' ');
            });

            
        });
    }


    changeLevel(level: { class: string, name: string, titleHe: string, titleAr: string }) {

        let that = this;
        this.dataService.getPisaQuestionsForLevel(level.name)
            .then(res => {

                let questions = res;

                that.questions = questions;
            })
            .catch();
    }
}
