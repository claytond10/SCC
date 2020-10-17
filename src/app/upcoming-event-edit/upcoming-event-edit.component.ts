import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, Params, ActivatedRoute } from '@angular/router';

import { UpcomingEventService } from '../upcoming-event.service';
import { LocationService } from '../location.service';
import { ContactService } from '../contact.service';
import { Location } from '../location';
import { Contact } from '../contact';

@Component({
  selector: 'app-upcoming-event-edit',
  templateUrl: './upcoming-event-edit.component.html',
  styleUrls: ['./upcoming-event-edit.component.css']
})

export class UpcomingEventEditComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, 
    private _upcomingEventService: UpcomingEventService,
    private _locationService: LocationService,
    private _contactService: ContactService,
    private router: Router,
    private routes: ActivatedRoute) { }

editUpcomingEventForm: FormGroup;
locations: Location[];
contacts: Contact[];

ngOnInit() {
  const routeParams = this.routes.snapshot.params;

  this._upcomingEventService.getUpcomingEventById(routeParams.id).subscribe((data: any) => {
    this.editUpcomingEventForm.patchValue(data);
  });

  this.editUpcomingEventForm = this.formBuilder.group({
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

update() {
  this._upcomingEventService.updateUpcomingEvent(this.editUpcomingEventForm.value).subscribe(data => {
  this.router.navigate(['viewUpcomingEvents']);
});
}

cancel() {
  this.router.navigate(['viewUpcomingEvents']);
}
}
