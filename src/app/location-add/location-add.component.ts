import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LocationService } from '../location.service';
import { LocationTypeService } from '../location-type.service';
import { LocationType } from '../location-type';

@Component({
  selector: 'app-location-add',
  templateUrl: './location-add.component.html',
  styleUrls: ['./location-add.component.css']
})

export class LocationAddComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, 
    private _locationService: LocationService,
    private _locationTypeService: LocationTypeService,
    private router: Router) { }

addLocationForm: FormGroup;
locationTypes: LocationType[];

ngOnInit() {
  this.addLocationForm = this.formBuilder.group({
  id:[''],
  location_name:['', [Validators.required, Validators.maxLength(50)]],
  loc_cd:['', [Validators.required]],
  });
  this.getLocationTypes();
}

getLocationTypes():void {
  this._locationTypeService.getLocationTypes().subscribe((data: LocationType[]) => {
  this.locationTypes = data;
});
}

onSubmit() {
  this._locationService.addLocation(this.addLocationForm.value).subscribe(data => {
  this.router.navigate(['viewLocations']);
});
}

cancel() {
  this.router.navigate(['viewLocations']);
}

}
