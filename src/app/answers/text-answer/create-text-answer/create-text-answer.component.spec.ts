import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTextAnswerComponent } from './create-text-answer.component';

describe('CreateTextAnswerComponent', () => {
  let component: CreateTextAnswerComponent;
  let fixture: ComponentFixture<CreateTextAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTextAnswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTextAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
