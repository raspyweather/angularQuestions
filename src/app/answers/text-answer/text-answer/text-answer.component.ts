import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { TextAnswer } from 'app/answers/text-answer/text-answer';
import { answerComponent } from "../../answerComponent";
import { Answer } from 'app/answers/answer';
@Component({
  selector: 'text-answer',
  templateUrl: './text-answer.component.html',
  styleUrls: ['./text-answer.component.css']
})
export class TextAnswerComponent implements OnInit, answerComponent {

  constructor() {
  }

  @ViewChild(HTMLInputElement)
  private textInput: HTMLInputElement;

  private answer: TextAnswer;
  @Input()
  set Answer(aw: TextAnswer) {
    this.answer = aw;
  }

  ngOnInit() {
  }
  public get isAnsweredCorrectly(): boolean {
    if (this.answer.caseSensitive)
      return this.answer.answers.some(aw => aw.includes(this.textInput.value));
    return this.answer.answers.some(aw => aw.toLocaleLowerCase().includes(this.textInput.value.toLocaleLowerCase()));

  }
  getFocused(name) {
    if (document) {
      let el = document.getElementById(name);
      if (el) { return el; }
    }
    return { focused: false };
  }


}
