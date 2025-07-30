import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcingLocalInternationalComponent } from './sourcing-local-international.component';

describe('SourcingLocalInternationalComponent', () => {
  let component: SourcingLocalInternationalComponent;
  let fixture: ComponentFixture<SourcingLocalInternationalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SourcingLocalInternationalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcingLocalInternationalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
