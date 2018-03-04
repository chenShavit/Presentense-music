import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../../data.service';
import { Router } from '@angular/router';
import * as myGlobals from '../../../globals';
import InputChecker from '../../../DataHelper/InputChecker';
import Translations from '../../../Translations/Translations';
import { forEach } from '@angular/router/src/utils/collection';


@Component({
    selector: 'question-with-cards',
    templateUrl: './question-with-cards.component.html',
    styleUrls: ['./question-with-cards.component.css']
})
export class QuestionWithCardsComponent implements OnInit {
    globals: {}
    bigTitle: string
    type: string
    challengesData: any
    scroll_click: any
    @Input() earnedPoints: number = 0
    isDesktop: boolean 
    choosenCardIndex: number
    @Input() stage: any
    @Input() answeredIndexes: any
    showCards: boolean 
    showCards_music:boolean
    showArrow:boolean= true
    changeArrow:boolean =true
   

    @Output() answer = new EventEmitter<any>();
    @Output() updateChoosenCardIndex = new EventEmitter<any>();
    @Output() showCard = new EventEmitter<any>();


    constructor(public dataService: DataService, public route: ActivatedRoute) {
    }
    ngOnInit(): void {
        this.globals = myGlobals;
        this.isDesktop = myGlobals.isDesktop;
        if(this.isDesktop){
            this.showCards=true;
            this.showCards_music=true;
            this.showArrow=false;
        }
        if (this.route.snapshot.params['type']) {
            // this.dataService.getchallengesDataByIndex(this.route.snapshot.params['type'])
            // .then(challengesData => {
            this.globals = myGlobals
            this.type = this.route.snapshot.params['type']
            this.dataService.type = this.type
            this.challengesData = this.dataService.challengesData[this.dataService.type]
        }

        var scrollTo = this.dataService.getScroll()
        window.scrollTo(0, scrollTo);
        // if (!myGlobals.isDesktop) {
        //     if (this.stage.video_question[0] && this.stage.video_question[0].question_text.includes('3')) {
        //         this.stage.video_question = this.stage.video_question.slice().reverse()
        //     }
        // }


    }

    clickNext(): void {
        if (this.earnedPoints < this.stage.pass_level_score) { // not enought points to pass
            this.dataService.alertMessage = "";

            let notEnoughText;
            if (this.dataService.currentLanguage.type == 'he') {
                notEnoughText = "נראה שעוד לא צברת " + this.stage.pass_level_score + ' נקודות. יאללה קטן עליך!';
            } else {
                notEnoughText = 'بعدك ما جمعت ' + this.stage.pass_level_score + ' نقطة؟ يلا، بتقدر!';
            }

            this.dataService.alertSubMessage = notEnoughText;
            this.dataService.genericPopUpIsSuccess = false;
            this.dataService.showGenericPopup = true;
        }
        else {
            this.dataService.sendAnalyticsEvent(this.dataService.getChallengeName(), 'אתגר המוזיקה', 'סיום משימה', 'auto_event')
            this.dataService.sendAnalyticsEvent(this.dataService.getChallengeName(), 'אתגר המוזיקה', 'סיום כרטיסיות', 'auto_event')

            this.answer.emit('showFinish') // remove after crazyness
        }
    }


    choosedCard(section: number, index: number): void {
        this.updateChoosenCardIndex.emit({ section: section, index: index })
    }

    cardClick(section: number, index: number): void {

        this.choosedCard(section, index)
        this.scroll_click = window.pageYOffset;
        this.dataService.setScroll(this.scroll_click);

        debugger
        if (this.answeredIndexes[section][index]) {
            if (section == 0) {
                return;
            }
        }
        if (section == 0) {

            this.showCard.emit('pisa')
            this.choosedCard(section, index)
        }
        else if (section == 1) {
            this.showCard.emit('video')
            this.choosedCard(section, index)
        }






    }
    show(){
        if(myGlobals.isDesktop==false){
            this.showCards = !this.showCards
            this.showArrow=true
        }
    }
    show_music(){
        if(myGlobals.isDesktop==false){
            this.showCards_music = !this.showCards_music
            this.showArrow=true
        }
    }
 
}
