import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LocationService } from '../location.service';
import { Location } from '../location';

@Component({
  selector: 'app-location-view',
  templateUrl: './location-view.component.html',
  styleUrls: ['./location-view.component.css']
})
export class LocationViewComponent implements OnInit {

  locations: Location[];
  _id: any;

  constructor(private _locationService: LocationService,
              private router: Router) { }

  ngOnInit() {
    this._locationService.getLocations().subscribe((data: Location[]) => {
      this.locations = data;
    });
  }

  delete(locations: Location):void {
    this._locationService.deleteLocation(locations.id).subscribe(data=>{
      this.locations = this.locations.filter(u => u !== locations);
    });
  }

  click_add() {
    this.router.navigate(['addLocation']);
  }

  add(locations: Location):void {
    this._locationService.addLocation(locations).subscribe(data=>{
      this.locations = this.locations.filter(u => u !== locations);
    });
  }

   edit(locations: Location) {
    this._id = locations.id;
    this.router.navigate(['editLocation/' + this._id]);
 
  }
}
