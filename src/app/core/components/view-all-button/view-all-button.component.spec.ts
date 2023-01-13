import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllButtonComponent } from './view-all-button.component';

describe('ViewAllButtonComponent', () => {
  let component: ViewAllButtonComponent;
  let fixture: ComponentFixture<ViewAllButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
