import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InquisitatorComponent } from './inquisitator.component';

describe('InquisitatorComponent', () => {
  let component: InquisitatorComponent;
  let fixture: ComponentFixture<InquisitatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InquisitatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InquisitatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
