import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodalDeskComponent } from './nodal-desk.component';

describe('NodalDeskComponent', () => {
  let component: NodalDeskComponent;
  let fixture: ComponentFixture<NodalDeskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodalDeskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NodalDeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
