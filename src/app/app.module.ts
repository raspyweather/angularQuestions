import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { AskquestionComponent } from './questions/askquestion/askquestion.component';
import { CreateQuestionComponent } from './questions/createquestion/createquestion.component';
import { CreatecatalogComponent } from './catalogs/createcatalog/createcatalog.component';
import { ViewCatalogDetailedComponent } from './catalogs/view-catalog-detailed/view-catalog-detailed.component';
import { ViewCatalogSimpleComponent } from './catalogs/view-catalog-simple/view-catalog-simple.component';
import { LibbrowserComponent } from './pages/libbrowser/libbrowser.component';
import { InquisitatorComponent } from './pages/inquisitator/inquisitator.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { YesNoAnswerComponent } from './answers/yes-no-answer/yes-no-answer/yes-no-answer.component';
import { CheckAnswerComponent } from './answers/check-answer/check-answer/check-answer.component';
import { TextAnswerComponent } from './answers/text-answer/text-answer/text-answer.component';
import { ViewAnswerComponent } from './answers/view-answer/view-answer.component';
import { CreateCheckAnswerComponent } from './answers/check-answer/create-check-answer/create-check-answer.component';
import { CreatetextAnswerComponent } from './answers/text-answer/create-text-answer/create-text-answer.component';
import { CreateYesNoAnswerComponent } from './answers/yes-no-answer/create-yes-no-answer/create-yes-no-answer.component';
import { CreateAnswerComponent } from './answers/create-answer/create-answer.component';
import { TruncatePipe } from './truncate.pipe';
import { MathJaxDirective } from './math-jax.directive';
import { focusingDirective } from './focusing.directive';
import { AppRoutingModule } from './app-routing.module';
import { CreateQuestionPageComponent } from './pages/create-question-page/create-question-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AskquestionComponent,
    CreateQuestionComponent,
    CreatecatalogComponent,
    ViewCatalogDetailedComponent,
    ViewCatalogSimpleComponent,
    LibbrowserComponent,
    InquisitatorComponent,
    MainPageComponent,
    YesNoAnswerComponent,
    CheckAnswerComponent,
    TextAnswerComponent,
    ViewAnswerComponent,
    CreateCheckAnswerComponent,
    CreatetextAnswerComponent,
    CreateYesNoAnswerComponent,
    CreateAnswerComponent,
    TruncatePipe,
    MathJaxDirective,
    focusingDirective,
    CreateQuestionPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
