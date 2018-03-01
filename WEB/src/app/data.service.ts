import { Injectable, Inject, OnInit, NgZone } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Headers, Http } from '@angular/http';
import { CookieService} from 'angular2-cookie/core';
import { Router } from '@angular/router';
import { isDevMode } from '@angular/core';
import { Translations } from './Translations/translations';
import 'rxjs/add/operator/toPromise';


/// Data Models
import UserDataModel from './DataModels/UserDataModel';
import LanguageDataModel from './DataModels/LanguageDataModel';
import { read } from 'fs';
import { retry } from 'rxjs/operator/retry';
import { CookieOptions } from 'angular2-cookie/services/base-cookie-options';

declare var window: any;
declare var FB: any;
declare var $: any;
declare var gapi: any;
declare var ga: any;

@Injectable()
export class DataService {
  private notify = new Subject<any>();
  notifyObservable$ = this.notify.asObservable();
  private currentUrl: string;
  private liveUrl = '/api/';
  private localUrl = 'http://localhost:3000/api/';
  private baseUrl = this.localUrl;
  private url: string;
  private headers = new Headers({ 'Content-Type': 'application/json' });
  ChainStore: boolean = false;
  translations: Translations = new Translations();
  type: string = "5";
  user: UserDataModel = new UserDataModel();
  contest: any
  challengesData: any
  currentLanguage: LanguageDataModel = new LanguageDataModel();
  viralLink: any
  showPopup: boolean = false;
  showPopupSign: boolean = false;
  showPopupContac: boolean = false;
  showConfirmTerms: boolean = false;
  showGenericPopup: boolean = false;
  showMessagePopup: boolean = false;
  alertMessage: string = "";
  alertSubMessage: string = "";
  genericPopUpIsSuccess: boolean = false;
  finishAlreadySent: boolean
  cookieoptions: CookieOptions
  click_scroll:any
  constructor(private http: Http, private _cookieService: CookieService, private router: Router) {
    if (!/localhost/.test(document.location.host)) {
      this.baseUrl = this.liveUrl;
    }
    this.cookieoptions = new CookieOptions({path:'/'})

    if (this.getCookieObject('user')) {
      this.getUser(this.getCookieObject('user'));
    }



    this.currentLanguage.type = this.getCookieObject('language') as string;
    if (this.currentLanguage.type === undefined) {
      this.currentLanguage.type = 'he';
      this.setCookieObject('language', this.currentLanguage.type as Object);
    }

    this.challengesData = {
      '1': {
        name: 'soccer',
        cssClassName: 'soccer',
        start_text: 'text',
        color: 'black',
        background: '/images/Hero-BG.png',
        imageSubtitle: '/images/taglineSoccer.png',
        subtitle: 'subtitle',
        waitforchallenge: 'רגע, האתגר הגדול עוד לא יצא לדרך',
        openAt: 'האתר יפתח ב',
        startButton: 'startButton',
        prasim: 'prasim',
        backgroundB: '#f4e280',
        firstPrize: {
          title: 'firstPrizeTitle',
          text: 'firstPrizeText',
          smalltext1: 'firstPrizeText1',
          smalltext2: 'firstPrizeText2',
          flippedText: 'firstPrizeFlippedText',
        },
        talkwithus: 'talkwithus',
        sendButton: 'sendButton',
        secondPrize: {
          title: 'secondPrizeTitle',
          text: 'secondPrizeText',
          flippedText: 'secondPrizeFlippedText'
        },
        thirdPrize: {
          title: 'thirdPrizeTitle',
          text: 'thirdPrizeText',
          flippedText: 'thirdPrizeTitle'
        },
        defaultStage: {
          title: 'defaultStageTitle',
          question: 'defaultStageQuestion',
          option1: 'option1',
          option2: 'option2',
          option3: 'option3',
          option4: 'option4'
        },
        logo: 'images/Big-ball-p-500.png',
        about: {
          title: 'titleOnTheCompetitionSoccer',
          text: 'textOnTheCompetitionSoccer',
          buttonRight: 'playNow',
          buttonLeft: 'makeTeam',
        },
        sentSuc: 'sentSuc',
        notPass: 'notPass',
        congrats: 'congrats',
        titleAnswerPisa: 'titleAnswerPisa',
        group: {
          title: 'groupTitle',
          button: 'playNow',
        },
        multi: {
          options: 'options',
        },
        profile: {
          title: 'titlePro',
          subtitle: 'subtitlePro',
          alerts: 'alerts',
          link: 'link',
        },
        cards: {
          title: 'titleCards',
          score: 'score',
          text: 'cardsText',
          subtitle: 'subtitleCards',
          cardText: 'cardsInText',
          button: 'cardsButton',
          back: 'cardsBack',
          first: {
            title: 'soccerFirstCardTitle',
            points: 'soccerFirstCardPoints',
            backTitle: 'soccerFirstCardBackTitle'
          },
          second: {
            title: 'soccerSecondCardTitle',
            points: 'soccerSecondCardPoints',
            backTitle: 'soccerSecondCardBackTitle'
          }
        },
        textQuestion: {
          pic: 'images/I.png',
          textArea: 'textArea',
        },
        single: {
          options_single: 'options_single',

        },
        passTitle: 'titlePass',
        stage: {
          question: 'question',
          stage_details: 'stage_details',
          sendButton: 'sendButton'
        },
        footer: {
          accociated: 'accociated',
          terms: 'terms'
        },
        forgot: {
          title: 'forgotTitle',
        },
        piza: {
          question: 'pizaQuestion',
        },
        nav: {
          enter: 'enter',
          prasim: 'navPrasim',
          private: 'private',
          contact_us: 'contactUs',
          dis_connect: 'disConnect',
          comp: 'comp',
        }
      },
      '2': {
        name: 'design',
        cssClassName: 'design',
        start_text: 'textDesign',
        subtitle: 'subtitleDesign',
        sendButton: 'sendButton',
        imageSubtitle: '/images/taglineDesign.png',
        color: '#ffffff',
        background: '/images/backgroundBlue.png',
        startButton: 'startButton',
        backgroundB: '#327869',
        prasim: 'prasim',
        firstPrize: {
          title: 'firstPrizeTitleDesign',
          text: 'firstPrizeTextDesign',
          flippedText: 'firstPrizeFlippedTextDesign',
        },
        secondPrize: {
          title: 'secondPrizeTitleDesign',
          text: 'secondPrizeTextDesign',
          flippedText: 'secondPrizeFlippedTextDesign'
        },
        thirdPrize: {
          title: 'thirdPrizeTitleDesign',
          text: 'thirdPrizeTextDesign',
          flippedText: 'thirdPrizeFlippedTextDesign'
        },
        defaultStage: {
          title: 'defaultStageTitleDesign',
          question: 'defaultStageQuestionDesign',
          option1: 'optionOneDesign',
          option2: 'optionTwoDesign',
          option3: 'optionThirdDesign',
          option4: 'optionFourDesign'
        },
        footer: {
          accociated: 'accociated',
          terms: 'terms'
        },
        logo: '/images/clothes.png',
        about: {
          // title: 'titleOnTheCompetitionSoccer',
          // text: 'textOnTheCompetitionSoccer',
          buttonRight: 'playNow',
          buttonLeft: 'makeTeam',
        },
        sentSuc: 'sentSuc',
        notPass: 'notPass',
        congrats: 'congrats',
        group: {
          title: 'groupTitle',
          button: 'playNow',
        },
        multi: {
          options: 'options',
        },
        profile: {
          title: 'titlePro',
          subtitle: 'subtitlePro',
          alerts: 'alerts',
          link: 'link',
        },
        cards: {
          title: 'titleCards',
          score: 'score',
          text: 'cardsText',
          subtitle: 'subtitleCards',
          cardText: 'cardsInText',
          button: 'cardsButton',
          back: 'cardsBack',
          first: {
            title: 'soccerFirstCardTitle',
            points: 'soccerFirstCardPoints',
            backTitle: 'soccerFirstCardBackTitle'
          },
          second: {
            title: 'soccerSecondCardTitle',
            points: 'soccerSecondCardPoints',
            backTitle: 'soccerSecondCardBackTitle'
          }
        },
        textQuestion: {
          pic: 'images/I.png',
          textArea: 'textArea',
        },
        single: {
          options_single: 'options_single',
        },
        passTitle: 'titlePass',
        stage: {
          question: 'question',
          stage_details: 'stage_details'
        },
        nav: {
          enter: 'enter',
          prasim: 'navPrasim',
          private: 'private',
          contact_us: 'contactUs',
          dis_connect: 'disConnect',
          comp: 'comp',
        }


      },
      '3': {
        name: 'tech',
        cssClassName: 'tech',
        sendButton: 'sendButton',
        start_text: 'textTech',
        subtitle: 'subtitleTech',
        imageSubtitle: '/images/taglineTech.png',
        color: '#ffffff',
        background: '/images/backgroundTech.png',
        startButton: 'startButton',
        backgroundB: '#4692d8',
        prasim: 'prasim',
        firstPrize: {
          title: 'firstPrizeTitleTech',
          text: 'firstPrizeTextTech',
          flippedText: 'firstPrizeFlippedTextTech',
        },
        secondPrize: {
          title: 'secondPrizeTitleTech',
          text: 'secondPrizeTextTech',
          flippedText: 'secondPrizeFlippedTextTech'
        },
        thirdPrize: {
          title: 'thirdPrizeTitleTech',
          text: 'thirdPrizeTextTech',
          flippedText: 'thirdPrizeFlippedTextTech',
        },
        defaultStage: {
          title: 'defaultStageTitleTech',
          question: 'defaultStageQuestionTech',
          option1: 'optionOneTech',
          option2: 'optionTwoTech',
          option3: 'optionThirdTech',
          option4: 'optionFourTech',
        },
        logo: '/images/lamp.png',
        nav: {
          enter: 'enter',
          prasim: 'navPrasim',
          private: 'private',
          contact_us: 'contactUs',
          dis_connect: 'disConnect',
          comp: 'comp',
        },
        footer: {
          accociated: 'accociated',
          terms: 'terms'
        },
        profile: {
          title: 'titlePro',
          subtitle: 'subtitlePro',
          alerts: 'alerts',
          link: 'link',
        },
        cards: {
          title: 'titleCards',
          score: 'score',
          text: 'cardsText',
          subtitle: 'subtitleCards',
          cardText: 'cardsInText',
          button: 'cardsButton',
          back: 'cardsBack',
          first: {
            title: 'soccerFirstCardTitle',
            points: 'soccerFirstCardPoints',
            backTitle: 'soccerFirstCardBackTitle'
          },
          second: {
            title: 'soccerSecondCardTitle',
            points: 'soccerSecondCardPoints',
            backTitle: 'soccerSecondCardBackTitle'
          }
        },
        passTitle: 'titlePass',
        stage: {
          question: 'question',
          stage_details: 'stage_details'
        },
        forgot: {
          title: 'forgotTitle',
        },
        piza: {
          question: 'pizaQuestion',
        }

      },
      '4': {
        name: 'social',
        cssClassName: 'social',
        start_text: 'textSocial',
        subtitle: 'subtitleSocial',
        imageSubtitle: '/images/taglineSocial.png',
        background: '/images/backgroungSocial.png',
        startButton: 'startButtonSocial',
        prasim: 'prasim',
        sendButton: 'sendButton',
        firstPrize: {
          title: 'firstPrizeTitleSocial',
          text: 'firstPrizeTextSocial',
          flippedText: 'firstPrizeFlippedTextSocial',
          smalltext1: 'firstPrizeText1',
          smalltext2: 'firstPrizeText2',
        },
        secondPrize: {
          title: 'secondPrizeTitleSocial',
          text: 'secondPrizeTextSocial',
          flippedText: 'secondPrizeFlippedTextSocial'
        },
        thirdPrize: {
          title: 'thirdPrizeTitleSocial',
          text: 'thirdPrizeTextSocial',
          flippedText: 'thirdPrizeFlippedTextSocial',
        },
        defaultStage: {
          title: 'defaultStageTitleSocial',
          question: 'defaultStageQuestionSocial',
          option1: 'optionOneSocial',
          option2: 'optionTwoSocial',
          option3: 'optionThirdSocial',
          option4: 'optionFourSocial',
        },
        group: {
          title: 'groupTitle',
          button: 'playNow',
        },
        talkwithus: 'talkwithus2',
        logo: '/images/hart.png',
        nav: {
          enter: 'enter',
          prasim: 'navPrasim',
          private: 'private_social',
          contact_us: 'contactUs',
          dis_connect: 'disConnect',
          comp: 'comp',
        },
        footer: {
          accociated: 'accociated',
          terms: 'terms'
        },
        passTitle: 'titlePass',
        stage: {
          question: 'question',
          stage_details: 'stage_details'
        },
        forgot: {
          title: 'forgotTitle',
        },
        piza: {
          question: 'pizaQuestion',
        },
        profile: {
          title: 'titlePro',
          subtitle: 'subtitlePro',
          alerts: 'alerts',
          link: 'link',
        },
        cards: {
          title: 'titleCards',
          score: 'score',
          text: 'cardsText',
          subtitle: 'subtitleCards',
          cardText: 'cardsInText',
          button: 'cardsButton',
          back: 'cardsBack',
          first: {
            title: 'soccerFirstCardTitle',
            points: 'soccerFirstCardPoints',
            backTitle: 'soccerFirstCardBackTitle'
          },
          second: {
            title: 'soccerSecondCardTitle',
            points: 'soccerSecondCardPoints',
            backTitle: 'soccerSecondCardBackTitle'
          }
        }

      },
      '5': {
        name: 'music',
        start_text: 'textMusic',
        subtitle: 'subtitleMusic',
        imageSubtitle: '/images/taglineMusic.png',
        background: '/images/backgroungMusic.png',
        startButton: 'startButton',
        sendButton: 'sendButton',
        prasim: 'prasim',
        single: {
          options_single: 'options_single',

        },
        passTitle: 'titlePass',
        stage: {
          question: 'question',
          stage_details: 'stage_details',
          sendButton: 'sendButton'
        },
        firstPrize: {
          title: 'firstPrizeTitleMusic',
          text: 'firstPrizeTextMusic',
          flippedText: 'firstPrizeFlippedTextMusic',
          smalltext1: 'firstPrizeText1',
          smalltext2: 'firstPrizeText2',
        },
        multi: {
          options: 'options',
        },
        secondPrize: {
          title: 'secondPrizeTitleMusic',
          text: 'secondPrizeTextMusic',
          flippedText: 'secondPrizeFlippedTextMusic',
          smalltext1: 'secondPrizeText1',
          smalltext2: 'secondPrizeText2',
        },
        thirdPrize: {
          title: 'thirdPrizeTitleMusic',
          text: 'thirdPrizeTextMusic',
          flippedText: 'thirdPrizeFlippedTextMusic',
          smalltext1: 'thirdPrizeText1',
          smalltext2: 'thirdPrizeText2',
        },
        defaultStage: {
          title: 'defaultStageTitleMusic',
          question: 'defaultStageQuestionMusic',
          option1: 'optionOneMusic',
          option2: 'optionTwoMusic',
          option3: 'optionThirdMusic',
          option4: 'optionFourMusic',
        },
        nav: {
          enter: 'enter',
          prasim: 'navPrasim',
          private: 'private',
          contact_us: 'contactUs',
          dis_connect: 'disConnect',
          comp: 'comp',
        },
        footer: {
          accociated: 'accociated',
          terms: 'terms'
        },
       
        forgot: {
          title: 'forgotTitle',
        },
        piza: {
          question: 'pizaQuestion',
        },
        profile: {
          title: 'titlePro',
          subtitle: 'subtitlePro',
          alerts: 'alerts',
          link: 'link',
        },
        cards: {
          title: 'titleCards',
          score: 'score',
          text: 'cardsText',
          subtitle: 'subtitleCards',
          cardText: 'cardsInText',
          button: 'cardsButton',
          back: 'cardsBack',
          first: {
            title: 'soccerFirstCardTitle',
            points: 'soccerFirstCardPoints',
            backTitle: 'soccerFirstCardBackTitle'
          },
          second: {
            title: 'soccerSecondCardTitle',
            points: 'soccerSecondCardPoints',
            backTitle: 'soccerSecondCardBackTitle'
          }
        }
      }
    }
  }


  public notifyOther(data: any) {
    if (data) {
      this.notify.next(data);
    }
  }

  public getText(key: any): string {
    if (key == undefined)
      return "";
    return this.translations.translate(key, this.currentLanguage.type);
  }

  // <editor-fold desc="User Requests">

  getchallengesDataByIndex(challengesDataIndex: any): Promise<any> {
    return this.http
      .get(this.baseUrl + 'challengesData/' + challengesDataIndex)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getPisaQuestion(categoryId: string, level: string): Promise<any> {
    let queryParams = '?user_id=' + this.getCookieObject("user") + '&category=' + categoryId + '&level=' + level + '&language=' + this.getCookieObject('language');
    return this.http
      .get(this.baseUrl + 'pisa/get/' + queryParams)
      .toPromise()
      .then(res => {
        let response = res.json();
        if (response.success) {
          return response.pisaObj;
        } else {
          console.log(response.message);
        }
      })
      .catch(this.handleError);
  }

  getContest(type: string): Promise<any> {
    return this.http.get(this.baseUrl + 'contest/' + type, { headers: this.headers }).toPromise()
      .then(res => {
        this.contest = JSON.parse(res['_body']);
        this.shouldShowConfirmTermsPopup();
        return JSON.parse(res['_body'])
      }).catch(this.handleError)
  }

  //Joining contest by updating the userDB with the context_index.
  joinContest(): Promise<any> {
    return this.http.post(this.baseUrl + 'joinContest', { user_id: this.user._id, contest_index: this.type }, { headers: this.headers }).toPromise()
      .then(res => {
        this.getUser(this.getCookieObject('user'));
        this.showConfirmTerms = false;
      })
      .catch(this.handleError)
  }

  getUser(user_id: any): Promise<UserDataModel> {
    return this.http.get(this.baseUrl + 'user/' + user_id, { headers: this.headers }).toPromise()
      .then(res => {
        this.user = Object.assign(new UserDataModel, JSON.parse(res['_body']))
        this.saveUser();
        return this.user;
      }).catch(this.handleError);
  }

  getContestUserNotification(user_id: string, contest: any): Promise<any> {
    let queryParams = '?user_id=' + user_id + '&contest_id=' + contest;
    return this.http.get(this.baseUrl + 'contestUserNotifications/' + queryParams, { headers: this.headers }).toPromise()
      .then(res => {
        return JSON.parse(res['_body'])
      }).catch(this.handleError)
  }

  saveUser(): void {
    if (!this.getCookieObject('user')) {
    this.setCookieObject('user', this.user._id as Object);
    }
  }

  createUser(user: UserDataModel): Promise<UserDataModel> {
    return this.http
      .post(this.baseUrl + 'user', { user: user, contest: this.contest }, { headers: this.headers })
      .toPromise()
      .then(res => {
        JSON.parse(res['_body']);
        this.user = Object.assign(new UserDataModel, JSON.parse(res['_body']))
        if (!this.user.isEmpty()) {
          this.saveUser();
          return this.user;
        }
      }).catch(this.handleError);
  }

  getGroup(group_id: any): Promise<any> {
    let queryParams = '?group_id=' + group_id + '&contest_id=' + this.contest._id;
    return this.http
      .get(this.baseUrl + 'group/' + queryParams, { headers: this.headers })
      .toPromise()
      .then(res => {
        return JSON.parse(res['_body']);
      }).catch(this.handleError);
  }

  createGroup(): Promise<any> {
    return this.http.post(this.baseUrl + 'createGroup', { user: this.user, contest: this.contest }, { headers: this.headers })
      .toPromise()
      .then(res => {
        return this.getUser(this.getCookieObject('user'));
      }).catch(this.handleError);
  }

  leaveGroup(groupId: string) {
    let userId = this.user._id;
    let url = `${this.baseUrl}user/${userId}/group/${groupId}`
    return this.http
      .delete(url, { headers: this.headers })
      .toPromise()
      .then(res => {
        return JSON.parse(res['_body']);
      }).catch(this.handleError);
  }


  getUserGroups() {
    let userId = this.user._id;
    if (!userId) {
      return;
    }

    let url = `${this.baseUrl}user/${userId}/groups`;

    return this.http.get(url, { headers: this.headers })
      .toPromise()
      .then(res => {
        return res.json();
      }).catch(this.handleError);

  }


  saveViralLink(viralLink: string) {
    this._cookieService.put('vl', btoa(viralLink));
  }

  getViralLink() {
    let link: string = this._cookieService.get('vl');
    if (link) {
      try {
        link = atob(link);
      } catch (error) {
        link = '';
      }
    }
    return link;
  }

  clearViralLink() {
    this._cookieService.remove('vl');
  }

  login(userLoginDetails: any): Promise<UserDataModel> {
    //chceks if should show confirm terms popup.
    return this.http
      .post(this.baseUrl + 'user/login', userLoginDetails, { headers: this.headers })
      .toPromise()
      .then(res => {
        JSON.parse(res['_body']);
        this.user = Object.assign(new UserDataModel, JSON.parse(res['_body']))
        this.saveUser();
        this.shouldShowConfirmTermsPopup();
        return this.user
      }).catch(this.handleError);
  }

  loginFromFacebook(user: any): Promise<UserDataModel> {
    //chceks if should show confirm terms popup.

    return this.http
      .post(this.baseUrl + 'user/loginFacebook', { user: user }, { headers: this.headers })
      .toPromise()
      .then(res => {
        JSON.parse(res['_body']);
        this.user = Object.assign(new UserDataModel, JSON.parse(res['_body']));
        this.saveUser();
        this.shouldShowConfirmTermsPopup();
        return this.user;
      }).catch(this.handleError);
  }

  fbLogoutUser(cb: any) {
    var that = this;
    FB.getLoginStatus(function (response: any) {
      if (response && response.status === 'connected') {
        FB.logout(function (response: any) {
          delete that['facebookUser'];
          return cb();
        });
      }
    });
  }


  getCookieObject(key: string) {
    return this._cookieService.getObject(key);
  }
  setCookieObject(key: string, value: object) {
    return this._cookieService.putObject(key, value);
  }
  removeCookieObject(key: string) {
    return this._cookieService.remove(key);
  }

  changeLanguage(): void {
    if (this.currentLanguage.type === 'he') {
      this.currentLanguage.type = 'ar'
    }
    else if (this.currentLanguage.type === 'ar') {
      this.currentLanguage.type = 'he'
    }
    this.setCookieObject('language', this.currentLanguage.type as Object);
    this.sendGoogleTagEventLang(this.currentLanguage.type)

  }

  showLoginPopup(): void {
    this.showPopupSign = false;
    this.showPopup = true;
  }

  showSignupPopup(): void {
    this.showPopup = false;
    this.showPopupSign = true;
  }

  showContacPopup(): void {
    this.showPopupContac = true;
    this.showPopupSign = false;
    this.showPopup = false;
  }

  copy(text: string): void {
    var textArea = $('<textarea></textarea>');
    textArea.css.visibility = 'hidden';
    textArea.val(text);
    $(document.body).append(textArea);
    textArea.select();
    var successful = document.execCommand('copy');
    if (successful === true) {
      this.showMessagePopup = true;
      this.alertMessage = "הלינק הועתק בהצלחה";
      this.alertSubMessage = "";
    }
    textArea.remove();
  }

  /**
   * 
   * The function checkes if contest_stages.contest_index is different than  this.type (game).
   * when there is a differnce bewteen the two - it should show the confirm terms popup.
   * @memberof DataService
   */
  shouldShowConfirmTermsPopup(): void {
    //checks if the user is logged in.
    if (!this.user.isEmpty() && this.user.contest_stages) {
      let found = false;
      for (var index in this.user.contest_stages) {
        if (this.user.contest_stages[index].contest_index === Number(this.type)) {
          found = true;
        }
      }
      if (!found) {
        //this will show the confirm terms popup.
       // this.showConfirmTerms = true;
      }
    }
  }

  forgotPassword(user_email: any): Promise<any> {
    var that = this
    return this.http
      .post(this.baseUrl + 'user/forgot', { email: user_email }, { headers: this.headers })
      .toPromise()
      .then(res => {
        return JSON.parse(res['_body'])
      }).catch(this.handleError);
  }

  questionAnswered(answer: any) {
    return this.http.post(this.baseUrl + 'stage/answer', answer, { headers: this.headers })
      .toPromise().then(res => {
        var resp = JSON.parse(res['_body']);
        if (resp.continue == 'any' && JSON.parse(resp.increased)) {
          this.user = Object.assign(new UserDataModel, resp.data);
          //this.saveUser();
          return { result: resp.result, user: this.user, continue: resp.continue, resp: resp };
        }
        else {
          if (JSON.parse(resp.increased)) {
            this.user = Object.assign(new UserDataModel, resp.data);
            //this.saveUser();
            return { result: resp.result, user: this.user, continue: resp.continue, resp: resp };
          }
          return { result: resp.result, data: resp.data, continue: resp.continue, resp: resp };
        }
      }).catch(this.handleError);
  }

  changePassword(userDetails: any): Promise<UserDataModel> {
    return this.http.post(this.baseUrl + 'user/changePassword', userDetails, { headers: this.headers })
      .toPromise()
      .then(res => {
        JSON.parse(res['_body']);
        this.user = Object.assign(new UserDataModel, JSON.parse(res['_body']));
        //this.saveUser();
        return this.user;
      })
      .catch(this.handleError);
  }

  sendContactUsForm(formData: any): Promise<UserDataModel> {
    return this.http.post(this.baseUrl + 'notification/sendContactUsForm', formData, { headers: this.headers })
      .toPromise()
      .then(res => {
        let response = res.json();
        return response.success
      })
      .catch(this.handleError);
  }


routeHome(): void {
  this.router.navigate(['']);
}

  logOut(): void {
    if (this.getCookieObject('user'))
      this.removeCookieObject('user');

    this.user = new UserDataModel();
    this.user.email = '';

    // TODO: logout social users..
    //Facebook
    this.fbLogoutUser(function () { });

    //Google+
    if (gapi.auth2) {
      var auth2 = gapi.auth2.getAuthInstance();
      auth2.signOut().then(function () {
        console.log('User signed out.');
      });
    }
    
  }


  getPisaQuestionsForLevel(level: String) {

    let lang = this.getCookieObject('language');

    let endpoint = `pisa/list?level=${level}&lang=${lang}`;

    return this.http.get(this.baseUrl + endpoint, { headers: this.headers })
      .toPromise().then(res => {
        let response = res.json();
        return response;
      })
      .catch(this.handleError);
  }


  getPisaQuestionById(id: string) {

    let endpoint = `pisa/${id}`;

    return this.http.get(this.baseUrl + endpoint, { headers: this.headers })
      .toPromise().then(res => {
        let response = res.json();
        return response;
      })
      .catch(this.handleError);
  }

  updateUserPhoneNumber() {
    let phone = this.user.phone
   return this.http.post(this.baseUrl + 'user/updatePhone', this.user, { headers: this.headers })
      .toPromise()
      .then(res => {
        this.user = Object.assign(new UserDataModel, JSON.parse(res['_body']))
        this.user.phone = phone
        this.saveUser();
      }).catch(this.handleError);
  }

  checkPisaQuestion(questionId: string, answers: any, card_index?: number) {
    let url = `${this.baseUrl}pisa/check/${questionId}`;
    let body = {
      user_id: this.getCookieObject('user'),
      answers: answers,
      user: this.user,
      contest: this.contest,
      card_index: card_index ? card_index : ''
    
    }

    return this.http.post(url, body, { headers: this.headers })
      .toPromise()
      .then(res => {
        let response = res.json();
        return response;
      })
      .catch(this.handleError);
  }

  getChallengeName(): string {
    var categoryName
    switch (this.type) {
      case '1':
        categoryName = 'אתגר הכדורגל'
        break;
      case '2':
        categoryName = 'אתגר העיצוב'
        break;
      case '3':
        categoryName = 'אתגר הטכנולוגיה'
        break;
      case '4':
        categoryName = 'האתגר החברתי'
        break;
      case '5':
        categoryName = 'אתגר המוזיקה'
        break;
      default:
        categoryName = 'אתגר הכדורגל'
        break;
    }
    return categoryName
  }


  sendAnalyticsEvent(category: string, action: string, label: string, value?: any): void {
    // ga('send', 'event', {
    //   eventCategory: category,
    //   eventAction: action,
    //   eventLabel: label,
    //   eventValue: value ? value : this.user._id
    // });
    action = action ? this.replaceAllSpaces(action) : ''
    label = label ? this.replaceAllSpaces(label) : ''
    category = category ? this.replaceAllSpaces(category) : ''
    window.dataLayer.push({ 'Category': category, 'Action': action, 'Label': label, 'event': value ? value : this.user._id });

  }

  sendGoogleTagEventUID(uid: string, event: string): void {
    window.dataLayer.push({ 'UID': uid, 'event': event });
  }
  sendGoogleTagEventLang(lang: string): void {

    window.dataLayer.push({ 'LANGUAGE': lang, 'event': 'LANGUAGE' });
  }

  sendGoogleTagVirtualPage(stagenumber: string, stagename?: string, stagemininame?: string): void {
    stagename = stagename ? this.replaceAllSpaces(stagename) : ''
    stagemininame = stagemininame ? this.replaceAllSpaces(stagemininame) : ''

    window.dataLayer.push({
      'virtual_page': 'virtual/' + stagenumber + (stagename ? ('/' + stagename) : '') + (stagemininame ? ('/' + stagemininame) : ''),
      'event': 'virtual_page'
    });
  }
  
  replaceAllSpaces(str: string): string {
    return str.split(' ').join('_');
  }


  saveMissionProgress(answered: any, earnedPoints: number) {

    let userId = this.user._id;
    if (!userId) {
      throw new Error('no user c');
    }


    let url = `${this.baseUrl}contest/${userId}/mission`;
    let body = {
      answered: answered,
      earnedPoints: earnedPoints
    }

    return this.http.post(url, body, { headers: this.headers })
      .toPromise()
      .then(res => {
        let response = res.json();
        console.log('saved progress');
        return response;
      })
      .catch((err) => {
        console.error('mission progress save error', err);
      });

  }
  setScroll(click_scroll:any){
    this.click_scroll=click_scroll;
  }
 getScroll():number{
   return this.click_scroll;
 }

  getMissionProgress() {

    let userId = this.user._id;
    if (!userId) {
      throw new Error('no user c');
    }


    let url = `${this.baseUrl}contest/${userId}/mission`;


    return this.http.get(url, { headers: this.headers })
      .toPromise()
      .then(res => {
        let response = res.json();

        return response;
      })
      .catch((err) => {
        console.error('mission progress get error', err);
      });

  }
 
}

