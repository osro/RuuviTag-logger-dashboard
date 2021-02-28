import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirPresssureChartComponent } from './air-presssure-chart.component';

describe('AirPresssureChartComponent', () => {
  let component: AirPresssureChartComponent;
  let fixture: ComponentFixture<AirPresssureChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirPresssureChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirPresssureChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
