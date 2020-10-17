import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ScheduleService } from '../schedule.service';
import { ActivityService } from '../activity.service';
import { Activity } from '../activity';

@Component({
  selector: 'app-schedule-add',
  templateUrl: './schedule-add.component.html',
  styleUrls: ['./schedule-add.component.css']
})

export class ScheduleAddComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, 
    private _scheduleService: ScheduleService,
    private _activityService: ActivityService,
    private router: Router) { }

addScheduleForm: FormGroup;
activities: Activity[];

ngOnInit() {
  this.addScheduleForm = this.formBuilder.group({
    schedule_id:[''],
    schedule_date:['', [Validators.required]],
    schedule_time:['', [Validators.required]],
    activity_id:['', [Validators.required]],
    activity_name:[''],
  });
  this.getActivities();
}

getActivities():void {
  this._activityService.getActivities().subscribe((data: Activity[]) => {
  this.activities = data;
});
}

onSubmit() {
  this._scheduleService.addSchedule(this.addScheduleForm.value).subscribe(data => {
    this.router.navigate(['viewSchedule']);
  });
}
}
