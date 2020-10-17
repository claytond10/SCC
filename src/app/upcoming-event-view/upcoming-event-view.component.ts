import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UpcomingEventService } from '../upcoming-event.service';
import { UpcomingEvent } from '../upcoming-event';


@Component({
  selector: 'app-upcoming-event-view',
  templateUrl: './upcoming-event-view.component.html',
  styleUrls: ['./upcoming-event-view.component.css']
})

export class UpcomingEventViewComponent implements OnInit {
  events: UpcomingEvent[];
  _id: any;

  constructor(private _upcomingEventService: UpcomingEventService,
              public router: Router) { }

  ngOnInit() {
    this._upcomingEventService.getUpcomingEvents().subscribe((data: UpcomingEvent[]) => {
      this.events = data;
    });
  }

  delete(events: UpcomingEvent):void {
    this._upcomingEventService.deleteUpcomingEvent(events.event_id).subscribe(data=>{
      this.events = this.events.filter(u => u !== events);
    });
  }

  click_add() {
    this.router.navigate(['addUpcomingEvent']);
  }
  
  add(events: UpcomingEvent):void {
    this._upcomingEventService.addUpcomingEvent(events).subscribe(data=>{
      this.events = this.events.filter(u => u !== events);
    });
  }

   edit(events: UpcomingEvent) {
    this.router.navigate(['editUpcomingEvent/' + events.event_id]);

  }
}


