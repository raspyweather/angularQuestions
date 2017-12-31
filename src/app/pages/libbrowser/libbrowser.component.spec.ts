import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibbrowserComponent } from './libbrowser.component';

describe('LibbrowserComponent', () => {
  let component: LibbrowserComponent;
  let fixture: ComponentFixture<LibbrowserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibbrowserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibbrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
