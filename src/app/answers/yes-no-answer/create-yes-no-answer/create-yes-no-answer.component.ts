import { Component, OnInit, Input } from '@angular/core';
import { yesnoAnswer } from 'app/answers/yes-no-answer/yes-no-answer';

@Component({
  selector: 'createyesno-answer',
  templateUrl: './create-yes-no-answer.component.html',
  styleUrls: ['./create-yes-no-answer.component.css']
})
export class CreateYesNoAnswerComponent implements OnInit {

  constructor() { }
  private answer: yesnoAnswer;
  @Input()
  set Answer(aw: yesnoAnswer) {
    this.answer = aw;
  }
  yesAnswered: boolean;

  ngOnInit() {
  }
  public getAnswer(): yesnoAnswer {
    let aw = new yesnoAnswer();
    aw.correct = this.yesAnswered;
    return aw;
  }
  // always true, because of boolean state
  public get isReady(): boolean {
    return this.yesAnswered === true || this.yesAnswered === false;
  }
  public readonly readyMessage = "";
}