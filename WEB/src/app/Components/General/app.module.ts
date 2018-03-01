import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CustExtBrowserXhr } from '../../cust-ext-browser-xhr';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Imports for loading & configuring the in-memory web api

import { AppComponent } from './app.component';
import { HomeComponent } from '../HomePage/home.component';
import { QuestionFlowComponent } from '../question-flow/question-flow.component';
import { CongratsComponent } from '../Congrats/congrats.component';
import { AnswerSentComponent } from '../AnswerSent/answer-sent.component';
import { MultiQuestionComponent } from '../question-types/MultiQuestion/multi-question.component';
import { SingleQuestionComponent } from '../question-types/SingleQuestion/single-question.component';
import { VideoQuestionComponent } from '../question-types/VideoQuestion/video-question.component';
import { FileUploadQuestionComponent } from '../question-types/FileUploadQuestion/file-upload-question.component';
import { ProgressBarComponent } from '../ProgressBar/progress-bar.component';
import { DidNotPassComponent } from '../DidNotPass/did-not-pass.component';
import { QuestionWithTextComponent } from '../question-types/QuestionWithText/question-with-text.component';
import { QuestionWithCardsComponent } from '../question-types/QuestionWithCards/question-with-cards.component';
import { ProfileComponent } from '../Profile/profile.component';
import { GroupComponent } from '../Group/group.component';
import { AboutComponent } from '../About/about.component';
import { StageComponent } from '../Stage/stage.component';
import { ConnectComponent} from '../../Components/PopUpConnect/popup-connect.component';
import { SignupComponent } from '../PopupSign/popup-sign.component';
import { ConfirmComponent } from '../PopUpConfirmTerms/popup-confirm-terms.component';
import { PopupFinishChallenge } from '../PopUpFinishChallenge/popup-finish-challenge.component';
import { AlertPopUpMessageComponent } from '../Common/AlertPopUpMessage/AlertPopUpMessage.component';
import { FacebookComponent } from '../FacebookIntergration/facebook-intergration.component';
import { ContactUsComponent } from '../ContactUs/contact-us.component';
import { ChangePassComponent } from '../ChangePass/change-pass.component';
import { GoogleComponent } from '../GoogleIntergration/google-intergration.component';
import { NotyetComponent } from '../NotYet/not-yet.component';
import { PisaQuestionComponent } from '../question-types/PisaQuestion/pisa-question.component';
import { StandalonePisaQuestionComponent } from '../question-types/StandalonePisaQuestion/standalone-pisa-question.component';
import { ImageSearch } from '../Pipes/PipeFindImageInQuestion/pipe-find-image-question.pipe';
import { GGBSearch } from '../Pipes/PipeFindGGB/pipe-find-ggb';
import { GGBInit } from '../Pipes/PipeFindGGB/pipe-init-ggb';
import { BiDi } from '../Pipes/PipeBiDi/pipe-bidi';
import { PisaHomeComponent } from '../PisaHome/homepisa.component';
import { PisaQuestionsComponent } from '../PisaQuestions/pisa-questions.component';
import { PisaPageComponent } from '../PisaPage/pisapage.component';
import { PisaHeaderComponent } from '../PisaPage/PisaHeader/pisa-header.component';
import { PisaQuestionsListComponent } from '../PisaQuestionsListing/pisa-questions-listing.component';
import { PopForActionComponent} from '../PopForAction/pop-for-action.component';
import { TermsComponent } from '../Terms/terms.component';

import { CookieService,CookieOptions } from 'angular2-cookie/core';
// import { CookieService } from 'angular2-cookie/services/cookies.service';
import { GlobalsService } from '../../globals';
import { DataService } from '../../data.service';
import { MainHeaderComponent } from '../Common/MainHeader/mainheader.component';
import { MainFooterComponent } from '../Common/MainFooter/mainfooter.component';

import { NavigationEnd, Router } from '@angular/router';
import { PendingChangesGuard } from '../Common/AlertLeavingPage/ComponentCanDeactivate';
import { InputSearch } from '../Pipes/PipeFindInput/pipe-find-input';
import { ForgotPasswordComponent } from '../ForgotPass/forgot-pass.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  declarations: [
    MainHeaderComponent,
    MainFooterComponent,
    AppComponent,
    HomeComponent,
    PisaHomeComponent,
    TermsComponent,
    PisaQuestionsComponent,
    PisaPageComponent,
    PisaHeaderComponent,
    PisaQuestionsListComponent,
    CongratsComponent,
    AnswerSentComponent,
    MultiQuestionComponent,
    SingleQuestionComponent,
    VideoQuestionComponent,
    FileUploadQuestionComponent,
    DidNotPassComponent,
    QuestionWithTextComponent,
    QuestionWithCardsComponent,
    ProfileComponent,
    GroupComponent,
    AboutComponent,
    ConnectComponent,
    SignupComponent,
    ConfirmComponent,
    PopupFinishChallenge,
    AlertPopUpMessageComponent,
    QuestionFlowComponent,
    StageComponent,
    ProgressBarComponent,
    FacebookComponent,
    ContactUsComponent,
    ChangePassComponent,
    GoogleComponent,
    NotyetComponent,
    PisaQuestionComponent,
    ImageSearch,
    InputSearch,
    GGBSearch,
    GGBInit,
    BiDi,
    ForgotPasswordComponent,
    PisaHomeComponent,
    PisaQuestionsComponent,
    PisaPageComponent,
    PisaHeaderComponent,
    PisaQuestionsListComponent,
    StandalonePisaQuestionComponent,
    PopForActionComponent
  ],
  providers: [DataService, CustExtBrowserXhr, CookieService, GlobalsService, PendingChangesGuard,{provide:CookieOptions,useValue:{}}],
  bootstrap: [AppComponent]
})
export class AppModule implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }
}
