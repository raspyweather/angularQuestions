import { Component, OnInit } from '@angular/core';
import { TextAnswer } from 'app/answers/text-answer/text-answer';
import { createAnswerComponent } from 'app/answers/createAnswerComponent';

@Component({
  selector: 'createtext-answer',
  templateUrl: './create-text-answer.component.html',
  styleUrls: ['./create-text-answer.component.css']
})

export class CreatetextAnswerComponent implements OnInit, createAnswerComponent {

  answers: string[];
  nextAnswer: string;
  caseSensitive: boolean = false;
  constructor() {
    this.answers = [];
  }

  ngOnInit() {
  }
  public get isReady() {
    return !this.nextAnswer && this.answers.length > 0;
  }
  public get readyMessage() {
    if (this.nextAnswer || this.nextAnswer.trim()) {
      return "Add the latest answer, or clear it";
    }
    if (this.answers.length < 0) {
      return "Please add at least one answer.";
    }
  }
  getFocused(name) {
    if (document) {
      let el = document.getElementById(name);
      if (el) { return el; }
    }
    return { focused: false };
  }
  removeAnswer(answer) {
    this.answers = this.answers.filter(x => x != answer);
  }
  setTextAnswer(inputId, idx?) {
    console.log(inputId, idx);
    let inputEl = (document.getElementById(inputId) as HTMLInputElement);
    if (inputEl) {
      if (idx === undefined) {
        this.nextAnswer = inputEl.value;
      }
      else {
        this.answers[idx] = inputEl.value;
      }
    }
    else {
      console.log("inputEl empty");
    }
  }
  addTextAnswer(inputId) {
    this.answers.push(this.nextAnswer);
    this.nextAnswer = "";
    let inputEl = (document.getElementById(inputId) as HTMLInputElement);
    if (inputEl) { inputEl.value = ""; }
    console.log(this.answers);
  }

  public getAnswer() {
    let aw = new TextAnswer();
    aw.answers = this.answers;
    aw.caseSensitive = this.caseSensitive;
    return aw;
  }

}

