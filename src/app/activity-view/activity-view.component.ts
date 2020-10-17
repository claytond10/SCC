import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ActivityService } from '../activity.service';
import { Activity } from '../activity';

@Component({
  selector: 'app-activity-view',
  templateUrl: './activity-view.component.html',
  styleUrls: ['./activity-view.component.css']
})

export class ActivityViewComponent implements OnInit {
  activities: Activity[];
  _id: any;

  constructor(private _activityService: ActivityService,
              private router: Router) {
                console.debug(router.url);
               }

  ngOnInit() {
    this._activityService.getActivities().subscribe((data: Activity[]) => {
      this.activities = data;
    });
  }

  delete(activities: Activity):void {
    this._activityService.deleteActivity(activities.id).subscribe(data=>{
      this.activities = this.activities.filter(u => u !== activities);
    });
  }

  click_add() {
    this.router.navigate(['addActivity']);
  }
  
  add(activities: Activity):void {
    this._activityService.addActivity(activities).subscribe(data=>{
      this.activities = this.activities.filter(u => u !== activities);
    });
  }

   edit(activities: Activity) {
    this.router.navigate(['editActivity/' + activities.id]);
  }
}