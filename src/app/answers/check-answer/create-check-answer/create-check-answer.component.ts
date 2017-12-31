import { Component, OnInit } from '@angular/core';
import { createAnswerComponent } from "../../createAnswerComponent";
import { CreateAnswerComponent } from 'app/answers/create-answer/create-answer.component';
import { Answer } from 'app/answers/answer';
import { CheckAnswer } from 'app/answers/check-answer/check-answer';

@Component({
  selector: 'createcheck-answer',
  templateUrl: './create-check-answer.component.html',
  styleUrls: ['./create-check-answer.component.css']
})
export class CreateCheckAnswerComponent implements OnInit, createAnswerComponent {

  nextAnswer: { right: boolean, text: string };
  answers: { right: boolean, text: string }[];

  constructor() {
    this.nextAnswer = { right: false, text: "" };
    this.answers = [];
  }

  ngOnInit() {
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
  setCheckAnswerText(inputId, answerRef) {
    console.log(inputId, answerRef);
    let inputEl = (document.getElementById(inputId) as HTMLInputElement);
    if (inputEl) {
      answerRef.text = inputEl.value;
    }
    else {
      console.log("inputEl empty");
    }
  }
  addCheckAnswer(inputId) {
    this.answers.push(this.nextAnswer);
    this.nextAnswer = { text: "", right: false };
    let inputEl = (document.getElementById(inputId) as HTMLInputElement);
    if (inputEl) { inputEl.value = ""; }
    console.log(this.answers);
  }
  toggleAnswerRight(answerRef) {
    answerRef.right = !answerRef.right;
  }

  public getAnswer(): Answer {
    let aw = new CheckAnswer();
    aw.value = this.answers;
    return aw;
  }
  public get isReady(): boolean {
    return this.answers.length > 0 &&
      !this.nextAnswer.text &&
      !this.nextAnswer.text.trim() &&
      this.answers.every(x => x.text != undefined && x.text.trim() != undefined);
  }
  public get readyMessage(): string {
    if (this.answers.length == 0) {
      return "Please add at least one answer";
    }
    if (this.nextAnswer.text || this.nextAnswer.text.trim()) {
      return "Please add the latest answer or clear it";
    }
    if (!this.answers.every(x => x.text != undefined && x.text.trim() != undefined)) {
      return "Please do not use empty answers";
    }
  }
}


