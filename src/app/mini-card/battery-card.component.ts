import { Component, Input, OnInit } from '@angular/core';
import { MiniCardComponent } from './mini-card.component';
import { DatabaseService } from '../service/database.service';

@Component({
    selector: 'app-battery-card',
    templateUrl: './battery-card.component.html',
    styleUrls: ['./mini-card.component.scss']
})
export class BatteryCardComponent extends MiniCardComponent {
    @Input() mac: String;

    private _batteryStatus: number;

    public get batteryStatus(): number {
        return this._batteryStatus;
    }
    public set batteryStatus(value: number) {
        this._batteryStatus = value;
    }

    public get batteryPercentage(): number {
        return Math.round(((this.batteryStatus - 1600) / (3600 - 1600)) * 100);
    }

    constructor(public databaseService: DatabaseService) {
        super();
    }

    ngOnInit(): void {
        if (this.mac) {
            this.fetchBatteryStatus();
        } else {
            this.batteryStatus = 0;
        }
    }

    fetchBatteryStatus() {                   
         this.databaseService.getBatteryStatus(this.mac).subscribe(response => {            
            this.batteryStatus = Number(response.data);
        });        
    }

}
