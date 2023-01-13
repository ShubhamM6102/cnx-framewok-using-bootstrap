import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherInfoSectionComponent } from './other-info-section.component';

describe('OtherInfoSectionComponent', () => {
  let component: OtherInfoSectionComponent;
  let fixture: ComponentFixture<OtherInfoSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherInfoSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherInfoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
