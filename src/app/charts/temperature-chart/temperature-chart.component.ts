import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { DatabaseService } from 'src/app/service/database.service';
import * as _ from "lodash"
import { Observable } from 'rxjs';

@Component({
  selector: 'app-temperature-chart',
  templateUrl: './temperature-chart.component.html',
  styleUrls: ['./temperature-chart.component.scss']
})
export class TemperatureChartComponent implements OnInit {
  @Input() mac: String;
  @Input() days: number;

  private _temperatureData: [];
  private _timeFormat: string = 'DD.MM.YY HH:mm';

  public get temperatureData(): [] {
    return this._temperatureData;
  }
  public set temperatureData(value: []) {
    this._temperatureData = value;
  }

  public lineChartData: ChartDataSets[] = [];
  public lineChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      display: false
    },
    title: {
      text: 'Temperature °C'
    },
    scales: {
      xAxes: [{
        type: 'time',
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Date'
        },
        time: {
          minUnit: 'hour',
          // tooltipFormat: this._timeFormat,
          displayFormats: {
            hour: 'HH:mm'
          }
        },
        ticks: {
          major: {
            enabled: true
          }
        }
      }],
      yAxes: [{
        position: 'right',
        scaleLabel: {
          display: true,
          labelString: '°C'
        },
        ticks: {
          beginAtZero: false
        }
      }]
    }
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  constructor(public databaseSerivce: DatabaseService) { }

  ngOnInit() {
    if (this.mac && this.days) {
      this.fetchTemperatureData();
    } else {
      this.temperatureData = [];
    }
  }

  createDataset(data) {

    let dataset: { x: string, y: number }[] = [];

    _.forEach(data, item => {
      dataset.push({
        x: item.timestamp,
        y: item.temperature
      });
    });

    this.lineChartData = [{
      data: dataset,
			borderColor: 'red',
      fill: false,
      lineTension: 1,
      pointRadius: 0,
    }];
    console.log('dataset done');
  }

  fetchTemperatureData() {
    this.databaseSerivce.getTemperatureData(this.mac, this.days).subscribe(response => {
      this.temperatureData = response.data;
      this.createDataset(this.temperatureData);
    })
  }

}
