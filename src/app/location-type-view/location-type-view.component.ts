import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LocationTypeService } from '../location-type.service';
import { LocationType } from '../location-type';

@Component({
  selector: 'app-location-type-view',
  templateUrl: './location-type-view.component.html',
  styleUrls: ['./location-type-view.component.css']
})

export class LocationTypeViewComponent implements OnInit {
  locationTypes: LocationType[];
  _id: any;

  constructor(private _locationTypeService: LocationTypeService,
              private router: Router) { }

  ngOnInit() {
    this._locationTypeService.getLocationTypes().subscribe((data: LocationType[]) => {
      this.locationTypes = data;
    });
  }

  delete(locationTypes: LocationType):void {
    this._locationTypeService.deleteLocationType(locationTypes.loc_cd).subscribe(data=>{
      this.locationTypes = this.locationTypes.filter(u => u !== locationTypes);
    });
  }

  click_add() {
    this.router.navigate(['addLocationType']);
  }

  add(locationTypes: LocationType):void {
    this._locationTypeService.addLocationType(locationTypes).subscribe(data=>{
      this.locationTypes = this.locationTypes.filter(u => u !== locationTypes);
    });
  }

   edit(locationTypes: LocationType) {
    this.router.navigate(['editLocationType/' + locationTypes.loc_cd]);
  }
}
