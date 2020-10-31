import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UpcomingEventService } from '../upcoming-event.service';
import { LocationService } from '../location.service';
import { ContactService } from '../contact.service';
import { Location } from '../location';
import { Contact } from '../contact';

@Component({
  selector: 'app-upcoming-event-add',
  templateUrl: './upcoming-event-add.component.html',
  styleUrls: ['./upcoming-event-add.component.css']
})

export class UpcomingEventAddComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, 
    private _upcomingEventService: UpcomingEventService,
    private _locationService: LocationService,
    private _contactService: ContactService,
    private router: Router) { }

addUpcomingEventForm: FormGroup;
locations: Location[];
contacts: Contact[];

ngOnInit() {
  this.addUpcomingEventForm = this.formBuilder.group({
    event_id:[''],
    event_name:['', [Validators.required, Validators.maxLength(25)]],
    event_date:['', [Validators.required]],
    event_time:[''],
    location_id:[''],
    contact_id:[''],
  });
  this.getLocations();
  this.getContacts();
}

getLocations():void {
  this._locationService.getLocationsUpcomingEvents().subscribe((data: Location[]) => {
  this.locations = data;
});
}

getContacts():void {
  this._contactService.getContacts().subscribe((data: Contact[]) => {
  this.contacts = data;
});
}

onSubmit() {
  this._upcomingEventService.addUpcomingEvent(this.addUpcomingEventForm.value).subscribe(data => {
    this.router.navigate(['viewUpcomingEvents']);
  });
}

cancel() {
  this.router.navigate(['viewUpcomingEvents']);
}
}

