import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, Params, ActivatedRoute } from '@angular/router';

import { LocationService } from '../location.service';
import { LocationTypeService } from '../location-type.service';
import { LocationType } from '../location-type';
import { ImageService } from '../image.service';
import { Image } from '../image';

@Component({
  selector: 'app-location-edit',
  templateUrl: './location-edit.component.html',
  styleUrls: ['./location-edit.component.css']
})
export class LocationEditComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, 
    private _locationService: LocationService,
    private _locationTypeService: LocationTypeService,
    private _imageService: ImageService,
    private router: Router,
    private routes: ActivatedRoute) {

     }

editLocationForm: FormGroup;
locationTypes: LocationType[];
images: Image[]; 

ngOnInit() {
  const routeParams = this.routes.snapshot.params;

  this._locationService.getLocationById(routeParams.id).subscribe((data: any) => {
    this.editLocationForm.patchValue(data);
  });

  this.editLocationForm = this.formBuilder.group({
  id:[''],
  location_name:['', [Validators.required, Validators.maxLength(50)]],
  loc_cd:['', [Validators.required]],
  image_id:['', [Validators.required]]
  }); 
  this.getLocationTypes();
  this.getImages();
}

getLocationTypes():void {
  this._locationTypeService.getLocationTypes().subscribe((data: LocationType[]) => {
  this.locationTypes = data;
});
}

getImages():void {
  this._imageService.getImages().subscribe((data: Image[]) => {
  this.images = data;
});
}

update() {
  this._locationService.updateLocation(this.editLocationForm.value).subscribe(data => {
  this.router.navigate(['viewLocations']);
});
}

cancel() {
  this.router.navigate(['viewLocations']);
}

}