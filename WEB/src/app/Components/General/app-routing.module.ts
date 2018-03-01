import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../HomePage/home.component';

import { CongratsComponent } from '../Congrats/congrats.component';
import { AnswerSentComponent } from '../AnswerSent/answer-sent.component';
import { DidNotPassComponent } from '../DidNotPass/did-not-pass.component';
import { QuestionWithCardsComponent } from '../question-types/QuestionWithCards/question-with-cards.component';
import { ProfileComponent } from '../Profile/profile.component';
import { GroupComponent } from '../Group/group.component';
import { AboutComponent } from '../About/about.component';
import { StageComponent } from '../Stage/stage.component';
import { ChangePassComponent } from '../ChangePass/change-pass.component';
import { PendingChangesGuard } from '../Common/AlertLeavingPage/ComponentCanDeactivate';
import { QuestionFlowComponent } from '../question-flow/question-flow.component';
import { NotyetComponent } from '../NotYet/not-yet.component';
import { QuestionWithTextComponent } from '../question-types/QuestionWithText/question-with-text.component';
import { MultiQuestionComponent } from '../question-types/MultiQuestion/multi-question.component';
import { SingleQuestionComponent } from '../question-types/SingleQuestion/single-question.component';
import { PisaQuestionComponent } from '../question-types/PisaQuestion/pisa-question.component';
import { ForgotPasswordComponent } from '../ForgotPass/forgot-pass.component';
import { PisaHomeComponent } from '../PisaHome/homepisa.component';
import { PisaQuestionsComponent } from '../PisaQuestions/pisa-questions.component';
import { PisaPageComponent } from '../PisaPage/pisapage.component';
import { TermsComponent } from '../Terms/terms.component';

const routes: Routes = [
   { path: 'notyet', component: NotyetComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'terms', component: TermsComponent, pathMatch: 'full' },
  { path: 'question-with-text/:type', component: QuestionWithTextComponent },
  { path: 'question-with-cards/:type', component: QuestionWithCardsComponent },
  { path: 'multi-question:type', component: MultiQuestionComponent },
  { path: 'pisa-question/:type', component: PisaQuestionComponent },
  { path: 'single-question/:type', component: SingleQuestionComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'group/:type', component: GroupComponent },
  { path: 'about/:type', component: AboutComponent },
  { path: 'stage/:type', component: StageComponent },
  { path: 'question-flow/:type', component: QuestionFlowComponent },
  { path: 'change-pass/:type', component: ChangePassComponent },
  { path: 'forgot/:type', component: ForgotPasswordComponent },
  { path: 'pisa/question/single/:level', component: PisaPageComponent },
  { path: '15', component: PisaHomeComponent },
  { path: 'pisaquestions/:type', component: PisaQuestionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
