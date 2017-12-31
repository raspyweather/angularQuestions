import { Component, OnInit, ViewChild } from '@angular/core';
import { CreateCheckAnswerComponent } from "../../answers/check-answer/create-check-answer/create-check-answer.component";
import { CreateYesNoAnswerComponent } from "../../answers/yes-no-answer/create-yes-no-answer/create-yes-no-answer.component";
import { CreatetextAnswerComponent } from "../../answers/text-answer/create-text-answer/create-text-answer.component";

import { CheckAnswer } from "../../answers/check-answer/check-answer";
import { yesnoAnswer } from "../../answers/yes-no-answer/yes-no-answer";
import { TextAnswer } from "../../answers/text-answer/text-answer";
import { createAnswerComponent } from 'app/answers/createAnswerComponent';
import { Answer } from 'app/answers/answer';

@Component({
  selector: 'create-answer',
  templateUrl: './create-answer.component.html',
  styleUrls: ['./create-answer.component.css']
})
export class CreateAnswerComponent implements OnInit, createAnswerComponent {

  constructor() {
    this.typeMapping = [
      { type: new yesnoAnswer(), component: () => this.yesnoAnswerComponent },
      { type: new CheckAnswer(), component: () => this.checkAnswerComponent },
      { type: new TextAnswer(), component: () => this.textAnswerComponent }
    ];
  }

  ngOnInit() {
  }

  @ViewChild(CreateYesNoAnswerComponent)
  yesnoAnswerComponent: CreateYesNoAnswerComponent;
  @ViewChild(CreateCheckAnswerComponent)
  checkAnswerComponent: CreateCheckAnswerComponent;
  @ViewChild(CreatetextAnswerComponent)
  textAnswerComponent: CreatetextAnswerComponent;

  typeMapping: { type: Answer, component: () => createAnswerComponent }[];
  selectedIndex: any;

  getAnswer() {
    return this.getActiveComponent().getAnswer();
  }
  get isReady() {
    return this.getActiveComponent().isReady;
  }

  getActiveComponent(): createAnswerComponent {

    if (this.selectedIndex > -1) {
      return this.typeMapping[this.selectedIndex].component();
    }
    return null;
  }
  chooseAnswer(typ) {
    if (this.selectedIndex == typ) { console.log("no change"); return; }
    this.selectedIndex = typ;
  }
  getFinishMessage() {
    let active = this.getActiveComponent();
    return undefined;
  }
  getFinishable() {
    let active = this.getActiveComponent();
    console.log(active, (active) ? active.isReady : "not active");
    if (active) {
      return active.isReady;
    }
    return false;
  }

  get readyMessage() {
    return this.getActiveComponent().readyMessage;
  }
}
