import { Component, OnInit, Input } from '@angular/core';
import { CheckAnswer } from "../check-answer";
import { Answer } from 'app/answers/answer';
import { answerComponent } from 'app/answers/answerComponent';
@Component({
  selector: 'check-answer',
  templateUrl: './check-answer.component.html',
  styleUrls: ['./check-answer.component.css']
})
export class CheckAnswerComponent implements OnInit, answerComponent {

  constructor() {
    this.answers = [];
  }
  private answer: CheckAnswer;

  @Input()
  set Answer(aw: CheckAnswer) {
    this.answer = aw;
    this.answers = this.answer.value.map(aw => { return { text: aw.text, right: aw.right, selected: false }; });
  }
  ngOnInit() {

  }
  answers: { right: boolean, selected: boolean, text: string }[];

  getFocused(name) {
    if (document) {
      let el = document.getElementById(name);
      if (el) { return el; }
    }
    return { focused: false };
  }

  toggleAnswer(answerRef) {
    answerRef.selected = !answerRef.selected;
  }
  public get isAnsweredCorrectly(): boolean {
    return this.answers.every((aw, idx) => aw.right == aw.selected);
  }
}
