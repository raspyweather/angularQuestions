import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCheckAnswerComponent } from './create-check-answer.component';

describe('CreateCheckAnswerComponent', () => {
  let component: CreateCheckAnswerComponent;
  let fixture: ComponentFixture<CreateCheckAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCheckAnswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCheckAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
