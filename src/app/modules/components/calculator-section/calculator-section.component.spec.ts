import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorSectionComponent } from './calculator-section.component';

describe('CalculatorSectionComponent', () => {
  let component: CalculatorSectionComponent;
  let fixture: ComponentFixture<CalculatorSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatorSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatorSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
