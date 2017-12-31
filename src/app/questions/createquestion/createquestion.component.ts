import { NgClass } from '@angular/common';
import { Component, OnInit, OnDestroy, ViewChild, Input } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { Answer } from "../../answers/answer";
import { Question } from "../question";
import { createAnswerComponent } from "../../answers/createAnswerComponent";

@Component({
  selector: 'create-question',
  templateUrl: './createquestion.component.html',
  styleUrls: ['./createquestion.component.css']
})
export class CreateQuestionComponent implements OnInit {

  constructor(private route: ActivatedRoute) {

  }

  @Input('data')
  question:Question;

  public answerTypes;
  public answerInstances;
  ngOnInit() {
    if (!this.question) {
      this.question = new Question();
    }
  }

  public get isReady() {
    return this.question
  }

  getFocused(name) {
    if (document) {
      let el = document.getElementById(name);
      if (el) { return el; }
    }
    return { focused: false };
  }


}
