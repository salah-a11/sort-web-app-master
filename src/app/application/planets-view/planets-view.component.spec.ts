import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetsViewComponent } from './planets-view.component';

describe('PlanetsViewComponent', () => {
  let component: PlanetsViewComponent;
  let fixture: ComponentFixture<PlanetsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanetsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
