import { NgZone, Component, OnInit, Input, Output, EventEmitter, ViewChild, ViewChildren, AfterViewChecked, AfterViewInit, ElementRef, QueryList, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../../data.service';
import { Router } from '@angular/router';
import * as myGlobals from '../../../globals';
import InputChecker from '../../../DataHelper/InputChecker';
import Translations from '../../../Translations/Translations';

declare var GGBApplet: any;
declare var parameters: any;
declare var MathQuill: any;
declare var $: any;

@Component({
    selector: 'pisa-question',
    templateUrl: './pisa-question.component.html',
    styleUrls: ['./pisa-question.component.css']
})
export class PisaQuestionComponent implements OnInit {


    @ViewChildren(".mathAnswers") mathAnswers: QueryList<any>;

    globals: {}
    bigTitle: string
    type: string
    challengesData: any
    @Input() stage: any = {}
    @Output() answer = new EventEmitter<any>();
    pisaQuestion: any
    answers: any = {}
    mathSolutions: any = [];

    constructor(public dataService: DataService, public route: ActivatedRoute, protected router: Router, protected zone: NgZone) {
    }


    ngOnInit(): void {

        if (this.route.snapshot.params['type']) {
            this.dataService.type = this.route.snapshot.params['type'];
            this.type = this.dataService.type
        }

        let that = this;
        this.getQuestion()
            .then(res => {
                that.renderQuestions(res);
            })
            .catch(err => console.log(err));

    }

    getQuestion(): Promise<any> {
        // Example for soccer pisa question..
        // First - contest > category > id
        // Second - contest > stage > pisas ([]) > level..
        return this.dataService
            .getPisaQuestion(this.dataService.contest['category']['_id'], 'medium');

    }


    /**
     * Draws the questions inside the Pisa
     * Question according to their type
     * @param question PisaQuestion
     */
    renderQuestions(question: any) {
        if (question._body) {
            question = question._body
        }
        this.pisaQuestion = question;

        this.dataService.sendGoogleTagVirtualPage(this.stage.index + 1, this.stage.stage_details, question.title)


        this.pisaQuestion.questions.forEach((question: any) => {

            // multi-choice question
            if (question.type == 2) {
                question.options.forEach((option: any) => {
                    if (!question.multi_options)
                        question.multi_options = []
                    question.multi_options.push({ text: option, checked: false });
                });
            }
            // Single choice question
            else if (question.type == 3) {
                question.options.forEach((option: any) => {
                    if (!question.single_options)
                        question.single_options = []
                    question.single_options.push({ text: option, checked: false });
                });
            }

            this.answers[question._id] = [];

        });

        this.initMath();

        $("body").onkeyup = function (e: any) {
            var kCd = e.keyCode || e.which;
            if (kCd == 0 || kCd == 229) { //for android chrome keycode fix
                kCd = this.getKeyCode(this.value);
            }
            alert(kCd)
        }

    }

    getKeyCode(str: string) {
        return str.charCodeAt(str.length - 1);
    }




    /**
   * Initialize MathQuill on all input fields ({{input}} - see PipeFindInput)
   */
    initMath() {

        let that = this;
        setTimeout(() => {
            let spanTags = $('.mq-answer');


            for (let i = 0; i < spanTags.length; i++) {

                let self = $(spanTags.get(i));

                self.on('change', function (e: any) {
                    // this is the question element
                    let parent = self.closest('.pisa-single-question');

                    // each question element has a data-id
                    // attr which representes the question _id
                    let questionId = parent.attr('data-id');

                    // since a free text question can have 
                    // multiple inputs we need to keep track 
                    // of the input's location within the question
                    // so we get the input element index inside 
                    // the parent.
                    let inputIndex = self.index();

                    let enteredValue = self.val();

                    // assign the user's input to the general 
                    // answers dictionary under the question
                    // id and in the input's index
                    let count = 0;
                    let stop = false
                    $('.pisa-single-question.text').each(function () {

                        if (!stop && $(this).attr('data-id') != questionId) {
                            count += $('.mq-answer', this).length;
                        } else {
                            stop = true;
                        }
                    });
                    self.removeClass('failed');
                    that.answers[questionId][i - count] = [enteredValue];
                })

            }



            // for (let i = 0; i < spanTags.length; ++i) {
            //     let MQ = MathQuill.getInterface(2);


            //     // this is the question element
            //     let parent = $(spanTags.get(i)).closest('.pisa-single-question');

            //     // each question element has a data-id
            //     // attr which representes the question _id
            //     let questionId = parent.attr('data-id');

            //     // since a free text question can have 
            //     // multiple inputs we need to keep track 
            //     // of the input's location within the question
            //     // so we get the input element index inside 
            //     // the parent.
            //     let inputIndex = $(spanTags.get(i)).index();

            //     let solution = MQ.MathField(spanTags.get(i), {
            //         handlers: {
            //             edit: function () {

            //                 // get the latex value.
            //                 // the correct_answers array will
            //                 // contain latex expressions to match with
            //                 // the user's input
            //                 let enteredValue = solution.latex();

            //                 // assign the user's input to the general 
            //                 // answers dictionary under the question
            //                 // id and in the input's index
            //                 let count = 0;
            //                 let stop = false
            //                 $('.pisa-single-question.text').each(function () {

            //                     if (!stop && $(this).attr('data-id') != questionId) {
            //                         count += $('.mq-answer', this).length;
            //                     } else {
            //                         stop = true;
            //                     }
            //                 });
            //                 $(spanTags.get(i)).removeClass('failed');
            //                 that.answers[questionId][i - count] = [enteredValue];
            //                 // console.log(that.answers);
            //             }
            //         },
            //         // copied from docs, might not 
            //         // be relevant
            //         substituteTextarea: function () {
            //             let a = document.createElement('input');
            //             a.className = 'kkkkk';
            //             a.onkeyup = function (e: any) {
            //                 let self: any = this;
            //                 var kCd = e.keyCode || e.which;
            //                 if (kCd == 0 || kCd == 229) { //for android chrome keycode fix
            //                     kCd = self.value.charCodeAt(0);
            //                 }
            //                 e.keyCode = kCd;

            //             }
            //             a.type = "text";
            //             return a;
            //         },
            //     });

            //     $('.mq-textarea input').keyup(function (e: any) {
            //         let self: any = this;


            //         var kCd = e.keyCode || e.which;
            //         if (kCd == 0 || kCd == 229) { //for android chrome keycode fix
            //             kCd = self.value.charCodeAt(0);
            //         }
            //         // e.keyCode = kCd;
            //         let val = String.fromCharCode(kCd);
            //         if (kCd === 8) {
            //             let chars = solution.el().value.split('');
            //             chars.pop();
            //             val = chars.join('');
            //         }
            //         solution.typedText(val);
            //         return kCd;
            //     })



            // }
        }, 20)
    }




    answered(): void {
        let that = this;
        if (this.dataService.currentLanguage.type == 'he') {
            that.dataService.alertMessage = "נראה שפספסת שאלה או שתיים...";
            that.dataService.alertSubMessage = "לפעמים לא קל במדרגות בדרך למטוס, אבל זה משתלם!";
        } else {
            that.dataService.alertMessage = "يبدو أنك فاتتك سؤالا أو سؤالين ...";
            that.dataService.alertSubMessage = "في بعض الأحيان الدرج ليست سهلة على الطريق إلى الطائرة، لكنه يدفع!";
        }

        this.pisaQuestion.questions.forEach(function (question: any) {
            if (question.type == 1) {
                if (that.answers[question._id].length == 0) {
                    that.dataService.genericPopUpIsSuccess = false;
                    that.dataService.showGenericPopup = true;
                    return
                }
                that.answers[question._id].forEach(function (pisaAnswerArr: any) {
                    if (pisaAnswerArr) {
                        pisaAnswerArr.forEach(function (pisaAnswer: any) {
                            if (pisaAnswer.length == 0) {
                                that.dataService.genericPopUpIsSuccess = false;
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
                    that.dataService.showGenericPopup = true;
                    return
                }
            }
            if (question.type == 3) {
                if (!question.selected) {
                    that.dataService.genericPopUpIsSuccess = false;
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

        console.log(this.answers);
        this.answer.emit(this.answers)
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

}