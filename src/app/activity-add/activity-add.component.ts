import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-activity-add',
  templateUrl: './activity-add.component.html',
  styleUrls: ['./activity-add.component.css']
})

export class ActivityAddComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, 
              private _activityService: ActivityService,
              private router: Router) { }

  addActivityForm: FormGroup;
  ngOnInit() {
    this.addActivityForm = this.formBuilder.group({
      id:[''],
      activity_name:['', [Validators.required, Validators.maxLength(50)]],
    });
  }

  onSubmit() {
    this._activityService.addActivity(this.addActivityForm.value).subscribe(data => {
      this.router.navigate(['viewActivities']);
    });
  }

  cancel() {
    this.router.navigate(['viewActivities']);
  }
}
