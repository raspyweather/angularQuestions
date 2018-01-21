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
  selector: 'view-answer',
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
    if (this.checkAnswerComponent && this.textAnswerComponent && this.yesnoAnswerComponent)
      console.log(this.isYesNoAnswer, this.isCheckAnswer, this.isTextAnswer);
  }

  @ViewChild(CheckAnswerComponent)
  private checkAnswerComponent: CheckAnswerComponent;
  @ViewChild(YesNoAnswerComponent)
  private yesnoAnswerComponent: YesNoAnswerComponent;
  @ViewChild(TextAnswerComponent)
  private textAnswerComponent: TextAnswerComponent;

  public get isAnsweredCorrectly(): boolean {
    return this.isYesNoAnswer && this.yesnoAnswerComponent.isAnsweredCorrectly ||
      this.isTextAnswer && this.textAnswerComponent.isAnsweredCorrectly ||
      this.isCheckAnswer && this.checkAnswerComponent.isAnsweredCorrectly;

  }

  public get isYesNoAnswer(): boolean {
    return this.answer.constructor.name === yesnoAnswer.name;
  }
  public get isCheckAnswer(): boolean {
    return this.answer.constructor.name === CheckAnswer.name;
  }
  public get isTextAnswer(): boolean {
    return this.answer.constructor.name === TextAnswer.name;
  }

}
