import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LogisticsService } from '../logistics.service';
import { Logistics } from '../logistics';

@Component({
  selector: 'app-logistics-view',
  templateUrl: './logistics-view.component.html',
  styleUrls: ['./logistics-view.component.css']
})

export class LogisticsViewComponent implements OnInit {
  logistics: Logistics[];
  _id: any;

  constructor(private _logisticsService: LogisticsService,
              public router: Router) { }

  ngOnInit() {
    this._logisticsService.getLogistics().subscribe((data: Logistics[]) => {
      this.logistics = data;
    });
  }

  delete(logistics: Logistics):void {
    this._logisticsService.deleteLogistics(logistics.log_id).subscribe(data=>{
      this.logistics = this.logistics.filter(u => u !== logistics);
    });
  }

  click_add() {
    this.router.navigate(['addLogistics']);
  }
  
  add(logistics: Logistics):void {
    this._logisticsService.addLogistics(logistics).subscribe(data=>{
      this.logistics = this.logistics.filter(u => u !== logistics);
    });
  }

   edit(logistics: Logistics) {
    this.router.navigate(['editLogistics/' + logistics.log_id]);
 
  }

}
