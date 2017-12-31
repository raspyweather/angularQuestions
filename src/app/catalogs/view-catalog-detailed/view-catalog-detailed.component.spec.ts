import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCatalogDetailedComponent } from './view-catalog-detailed.component';

describe('ViewCatalogDetailedComponent', () => {
  let component: ViewCatalogDetailedComponent;
  let fixture: ComponentFixture<ViewCatalogDetailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCatalogDetailedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCatalogDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
