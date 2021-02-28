import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatteryStatusChartComponent } from './battery-status-chart.component';

describe('BatteryStatusChartComponent', () => {
  let component: BatteryStatusChartComponent;
  let fixture: ComponentFixture<BatteryStatusChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatteryStatusChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BatteryStatusChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
