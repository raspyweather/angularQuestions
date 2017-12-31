import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateYesNoAnswerComponent } from './create-yes-no-answer.component';

describe('CreateYesNoAnswerComponent', () => {
  let component: CreateYesNoAnswerComponent;
  let fixture: ComponentFixture<CreateYesNoAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateYesNoAnswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateYesNoAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
