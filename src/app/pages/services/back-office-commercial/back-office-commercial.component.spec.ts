import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackOfficeCommercialComponent } from './back-office-commercial.component';

describe('BackOfficeCommercialComponent', () => {
  let component: BackOfficeCommercialComponent;
  let fixture: ComponentFixture<BackOfficeCommercialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackOfficeCommercialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackOfficeCommercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
