import { Component, OnInit, Input } from '@angular/core';
import { createAnswerComponent } from "../../createAnswerComponent";
import { yesnoAnswer } from "../yes-no-answer";
import { Answer } from 'app/answers/answer';
import { answerComponent } from 'app/answers/answerComponent';

@Component({
  selector: 'yes-no-answer',
  templateUrl: './yes-no-answer.component.html',
  styleUrls: ['./yes-no-answer.component.css']
})
export class YesNoAnswerComponent implements OnInit, answerComponent {

  constructor() { }
  private answer: yesnoAnswer;
  @Input()
  set Answer(aw: yesnoAnswer) {
    this.answer = aw;
  }
  yesAnswered: boolean = undefined;

  ngOnInit() {
  }

  public get isAnsweredCorrectly(): boolean {
    return this.yesAnswered === this.answer.correct;
  }
}
