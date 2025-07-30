import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationDesVentesComponent } from './administration-des-ventes.component';

describe('AdministrationDesVentesComponent', () => {
  let component: AdministrationDesVentesComponent;
  let fixture: ComponentFixture<AdministrationDesVentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrationDesVentesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrationDesVentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
