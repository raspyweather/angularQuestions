import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { CheckAnswerComponent } from "../../answers/check-answer/check-answer/check-answer.component";
import { YesNoAnswerComponent } from "../../answers/yes-no-answer/yes-no-answer/yes-no-answer.component";
import { TextAnswerComponent } from "../../answers/text-answer/text-answer/text-answer.component";

import { CheckAnswer } from "../../answers/check-answer/check-answer";
import { yesnoAnswer } from "../../answers/yes-no-answer/yes-no-answer";
import { TextAnswer } from "../../answers/text-answer/text-answer";

import { answerComponent } from "../answerComponent";

import { Answer } from 'app/answers/answer';
@Component({
  selector: 'app-view-answer',
  templateUrl: './view-answer.component.html',
  styleUrls: ['./view-answer.component.css']
})
export class ViewAnswerComponent implements OnInit, answerComponent {

  constructor() { }

  ngOnInit() {
  }
  private answer: Answer;
  @Input()
  set Answer(aw: Answer) {
    this.answer = aw;
  }

  @ViewChild(CheckAnswerComponent)
  private CheckAnswerComponent: CheckAnswerComponent;
  @ViewChild(YesNoAnswerComponent)
  private YesNoAnswerComponent: YesNoAnswerComponent;
  @ViewChild(TextAnswerComponent)
  private TextAnswerComponent: TextAnswerComponent;

  public get isAnsweredCorrectly(): boolean {
    return this.isYesNoAnswer && this.YesNoAnswerComponent.isAnsweredCorrectly ||
      this.isTextAnswer && this.TextAnswerComponent.isAnsweredCorrectly ||
      this.isCheckAnswer && this.CheckAnswerComponent.isAnsweredCorrectly;

  }

  public isYesNoAnswer(): boolean {
    return this.answer.constructor.name == yesnoAnswer.name;
  }
  public isCheckAnswer(): boolean {
    return this.answer.constructor.name == CheckAnswer.name;
  }
  public isTextAnswer(): boolean {
    return this.answer.constructor.name == TextAnswer.name;
  }

}
