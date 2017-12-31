import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecatalogComponent } from './createcatalog.component';

describe('CreatecatalogComponent', () => {
  let component: CreatecatalogComponent;
  let fixture: ComponentFixture<CreatecatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatecatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatecatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
