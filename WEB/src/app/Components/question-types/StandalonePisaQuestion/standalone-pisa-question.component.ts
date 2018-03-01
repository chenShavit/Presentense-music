import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../../data.service';
import { Router } from '@angular/router';
import * as myGlobals from '../../../globals';
import InputChecker from '../../../DataHelper/InputChecker';
import Translations from '../../../Translations/Translations';
import { PisaQuestionComponent } from '../PisaQuestion/pisa-question.component';
declare var MathQuill: any;
declare var $: any;

declare var GGBApplet: any;
@Component({
    selector: 'standalone-pisa-question',
    templateUrl: './standalone-pisa-question.component.html',
    styleUrls: ['./standalone-pisa-question.component.css']
})


export class StandalonePisaQuestionComponent extends PisaQuestionComponent implements OnInit {
    @Output() answer = new EventEmitter<any>();
    @Output() showSent = new EventEmitter<any>();

    @Input() currentStage: any
    @Input() stages: any

    //  ngOnInit(): void {
    //     this.getQuestion()
    //         .then(super.renderQuestions)
    //         .catch(err => console.log(err));
    // }


    getQuestion(): Promise<any> {
        if (this.route.snapshot.queryParams.q) {
            return this.dataService
                .getPisaQuestionById(this.route.snapshot.queryParams.q);
        }
        else {

            if (this.currentStage > 0) {
                this.currentStage = 0;
            }
            return this.dataService
                .getPisaQuestion(
                this.dataService.contest['category']['_id'],
                this.currentStage !== undefined ?
                    this.stages[this.currentStage].pisa_questions_difficulty[0] :
                    (this.stage ? this.stage.pisa_questions_difficulty[0] : '')
                ); // check if can be more than 1 pisa !!!
        }

    }

    questionAnswered(answers?: any): void {//Pass answer.

        // this.answered = true;
        let that = this;

        this.pisaQuestion.questions.forEach(function (question: any) {
            if (question.type == 1) {
                if (that.answers[question._id].length == 0) {
                    that.dataService.genericPopUpIsSuccess = false;
                    that.dataService.alertMessage = "נראה שפספסת שאלה או שתיים...";
                    that.dataService.alertSubMessage = "לפעמים לא קל במדרגות בדרך למטוס, אבל זה משתלם!";
                    that.dataService.showGenericPopup = true;
                    return
                }
                that.answers[question._id].forEach(function (pisaAnswerArr: any) {
                    if (pisaAnswerArr) {
                        pisaAnswerArr.forEach(function (pisaAnswer: any) {
                            if (pisaAnswer.length == 0) {
                                that.dataService.genericPopUpIsSuccess = false;
                                that.dataService.alertMessage = "נראה שפספסת שאלה או שתיים...";
                                that.dataService.alertSubMessage = "לפעמים לא קל במדרגות בדרך למטוס, אבל זה משתלם!";
                                that.dataService.showGenericPopup = true;
                                return
                            }
                        })
                    }
                })
            }
            if (question.type == 2) {
                var isCheckSomthing = false
                question.multi_options.forEach(function (multiAnswer: any) {
                    if (multiAnswer.checked) {
                        isCheckSomthing = true
                    }
                })

                if (!isCheckSomthing) {
                    that.dataService.genericPopUpIsSuccess = false;
                    that.dataService.alertMessage = "נראה שפספסת שאלה או שתיים...";
                    that.dataService.alertSubMessage = "לפעמים לא קל במדרגות בדרך למטוס, אבל זה משתלם!";
                    that.dataService.showGenericPopup = true;
                    return
                }
            }
            if (question.type == 3) {
                if (!question.selected) {
                    that.dataService.genericPopUpIsSuccess = false;
                    that.dataService.alertMessage = "נראה שפספסת שאלה או שתיים...";
                    that.dataService.alertSubMessage = "לפעמים לא קל במדרגות בדרך למטוס, אבל זה משתלם!";
                    that.dataService.showGenericPopup = true;
                    return
                }
            }
        })


        if (that.dataService.showGenericPopup) {
            return
        }

        for (var i = 0; i < this.answers.length; i++) {
            if (this.answers[i].length == 0) {

            }
        }

        this.answers.user = this.dataService.user
        this.answers.contest = this.dataService.contest

        this.dataService
            .checkPisaQuestion(this.pisaQuestion._id, this.answers)
            .then(results => {

                let failed = results.failed;
                console.log('failed', failed);
                if (this.checkFailure(failed) /*&& !this.showSent*/) {

                    that.dataService.genericPopUpIsSuccess = false;
                    that.dataService.alertMessage = "אחת או יותר מהתשובות שהזנת לא נכונה";
                    that.dataService.alertSubMessage = "אנא נסה/י שנית";
                    that.dataService.showGenericPopup = true;

                    for (var _id in failed) {

                        var failedIndexes = failed[_id];

                        let questionContext = $(`[data-id=${_id}]`);

                        let innerQuestion = this.pisaQuestion.questions.find((q: any) => {
                            return q._id == _id;
                        });

                        if (innerQuestion.type == '1') {

                            let count = 0;
                            let stop = false;
                            $('.pisa-single-question.text').each(function () {

                                if (!stop && $(this).attr('data-id') != innerQuestion._id) {
                                    count += $('.mq-answer', this).length;
                                } else {
                                    stop = true;
                                }
                            });


                            failedIndexes.forEach((index: number) => {

                                $('.mq-answer').eq(index + count).addClass('failed');

                            });

                        } else {
                            failedIndexes.forEach((index: number) => {
                                questionContext.addClass('failed');
                            });
                        }
                    }


                }
                else { // pass pisa !
                    /* if (this.showSent) {
                         results.isOnChallenge = true
                         this.answer.emit(results)
                     }
                     else {*/

                    //yaron: add googletag
                    this.dataService.sendAnalyticsEvent(this.dataService.getChallengeName(), this.pisaQuestion.title, 'סיום משימה', 'auto_event')
                    this.answer.emit(results)
                    // }
                }
            })
            .catch(err => {
                console.log(err);
            })
    }


    checkFailure(failedQuestions: any) {
        if (failedQuestions && Object.keys(failedQuestions).length) {
            let all: Array<any> = []
            for (var id in failedQuestions) {
                if (failedQuestions.hasOwnProperty(id)) {
                    let element = failedQuestions[id];
                    all = all.concat(element)

                }
            }

            return all.length > 0;
        }

        return false;

    }



    /**
       * 
       * @param event the click event
       * @param answer the option object from the question
       */
    addRemoveCheckboxAnswer(event: any, answer: any) {

        let target = event.target || event.srcElement || event.currentTarget;
        // this is the question element
        let parent = $(target).closest('.pisa-single-question');

        $(parent).removeClass('failed');
        $(target).removeClass('failed');
        // each question element has a data-id
        // attr which representes the question _id
        let questionId = parent.attr('data-id');

        let checkboxIndex = $(target).attr('index');

        let isMulti = $(parent).hasClass('multi');

        let remove = !answer.checked;

        // remove from array
        if (remove) {
            this.answers[questionId].splice([checkboxIndex], 1);
        }
        // add to answers
        else {
            let value = answer.text;
            // if multi simply push,
            // for single - replace
            if (isMulti) {
                this.answers[questionId].push(value);
            } else {
                this.answers[questionId] = [value]
            }

        }



    }


    setSingleQuestionAnswer(ques: any, ans: any) {
        ques.selected = ans;
        this.answers[ques._id] = [ans.text]
    }

}