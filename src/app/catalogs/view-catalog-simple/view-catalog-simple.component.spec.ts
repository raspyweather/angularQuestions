import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCatalogSimpleComponent } from './view-catalog-simple.component';

describe('ViewCatalogSimpleComponent', () => {
  let component: ViewCatalogSimpleComponent;
  let fixture: ComponentFixture<ViewCatalogSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCatalogSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCatalogSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
