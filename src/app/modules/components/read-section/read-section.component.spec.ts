import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadSectionComponent } from './read-section.component';

describe('ReadSectionComponent', () => {
  let component: ReadSectionComponent;
  let fixture: ComponentFixture<ReadSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
