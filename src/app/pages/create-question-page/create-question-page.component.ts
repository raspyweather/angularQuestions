import { Component, OnInit, ViewChild } from '@angular/core';
import { CreateQuestionComponent } from "../../questions/createquestion/createquestion.component";
@Component({
  selector: 'app-create-question-page',
  templateUrl: './create-question-page.component.html',
  styleUrls: ['./create-question-page.component.css']
})
export class CreateQuestionPageComponent implements OnInit {

  constructor() { }

  @ViewChild(CreateQuestionComponent)
  private createQuestion: CreateQuestionComponent;


  ngOnInit() {
  }

}
