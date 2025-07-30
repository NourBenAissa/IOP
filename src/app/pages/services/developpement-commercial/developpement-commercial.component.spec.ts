import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloppementCommercialComponent } from './developpement-commercial.component';

describe('DeveloppementCommercialComponent', () => {
  let component: DeveloppementCommercialComponent;
  let fixture: ComponentFixture<DeveloppementCommercialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeveloppementCommercialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloppementCommercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
