import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ScheduleService } from '../schedule.service';
import { Schedule } from '../schedule';

@Component({
  selector: 'app-schedule-view',
  templateUrl: './schedule-view.component.html',
  styleUrls: ['./schedule-view.component.css']
})

export class ScheduleViewComponent implements OnInit {
  schedule: Schedule[];
  _id: any;

  constructor(private _scheduleService: ScheduleService,
              public router: Router) { }

  ngOnInit() {
    this._scheduleService.getSchedule().subscribe((data: Schedule[]) => {
      this.schedule = data;
    });
  }
  
  delete(schedule: Schedule):void {
    this._scheduleService.deleteSchedule(schedule.schedule_id).subscribe(data=>{
      this.schedule = this.schedule.filter(u => u !== schedule);
    });
  }

  click_add() {
    this.router.navigate(['addSchedule']);
  }
  
  add(schedule: Schedule):void {
    this._scheduleService.addSchedule(schedule).subscribe(data=>{
      this.schedule = this.schedule.filter(u => u !== schedule);
    });
  }

   edit(schedule: Schedule) {
    this.router.navigate(['editSchedule/' + schedule.schedule_id]);

  }
}
