import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, Params, ActivatedRoute } from '@angular/router';

import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-activity-edit',
  templateUrl: './activity-edit.component.html',
  styleUrls: ['./activity-edit.component.css']
})

export class ActivityEditComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, 
              private _activityService: ActivityService,
              private router: Router,
              private routes: ActivatedRoute) { }

  editActivityForm: FormGroup;

  ngOnInit() {
    const routeParams = this.routes.snapshot.params;

    this._activityService.getActivityById(routeParams.id).subscribe((data: any) => {
      this.editActivityForm.patchValue(data);
    });

    this.editActivityForm = this.formBuilder.group({
      id:[''],
      activity_name:['', [Validators.required, Validators.maxLength(50)]],
    });
  }

  update() {
    this._activityService.updateActivity(this.editActivityForm.value).subscribe(data => {
      this.router.navigate(['viewActivities']);
    });
  }

  cancel() {
    this.router.navigate(['viewActivities']);
  }
}
