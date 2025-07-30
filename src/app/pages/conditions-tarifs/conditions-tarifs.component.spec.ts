import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionsTarifsComponent } from './conditions-tarifs.component';

describe('ConditionsTarifsComponent', () => {
  let component: ConditionsTarifsComponent;
  let fixture: ComponentFixture<ConditionsTarifsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionsTarifsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionsTarifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
