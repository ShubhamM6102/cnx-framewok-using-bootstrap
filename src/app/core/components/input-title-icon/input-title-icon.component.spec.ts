import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTitleIconComponent } from './input-title-icon.component';

describe('InputTitleIconComponent', () => {
  let component: InputTitleIconComponent;
  let fixture: ComponentFixture<InputTitleIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputTitleIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputTitleIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
