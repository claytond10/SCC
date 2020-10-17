import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { ScheduleService } from '../schedule.service';
import { ActivityService } from '../activity.service';
import { Activity } from '../activity';

@Component({
  selector: 'app-schedule-edit',
  templateUrl: './schedule-edit.component.html',
  styleUrls: ['./schedule-edit.component.css']
})

export class ScheduleEditComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, 
    private _scheduleService: ScheduleService,
    private _activityService: ActivityService,
    private router: Router,
    private routes: ActivatedRoute) { }

    editScheduleForm: FormGroup;
    activities: Activity[];

  ngOnInit() {
    const routeParams = this.routes.snapshot.params;

    this._scheduleService.getScheduleById(routeParams.id).subscribe((data: any) => {
      this.editScheduleForm.patchValue(data);
    });

    this.editScheduleForm = this.formBuilder.group({
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

  update() {
    this._scheduleService.updateSchedule(this.editScheduleForm.value).subscribe(data => {
    this.router.navigate(['viewSchedule']);
  });
  }
  
  cancel() {
    this.router.navigate(['viewSchedule']);
  }
}



