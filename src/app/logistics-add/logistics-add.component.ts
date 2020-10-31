import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LogisticsService } from '../logistics.service';
import { LocationService } from '../location.service';
import { Location } from '../location';
import { ImageService } from '../image.service';
import { Image } from '../image';

@Component({
  selector: 'app-logistics-add',
  templateUrl: './logistics-add.component.html',
  styleUrls: ['./logistics-add.component.css']
})

export class LogisticsAddComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, 
    private _logisticsService: LogisticsService,
    private _locationService: LocationService,
    private _imageService: ImageService,
    private router: Router) { }

addLogisticsForm: FormGroup;
locations: Location[];
images: Image[];

ngOnInit() {
  this.addLogisticsForm = this.formBuilder.group({
    log_id:[''],
    log_name:['', [Validators.required, Validators.maxLength(25)]],
    loc_id:[''],
    image_id:['']
  });
  this.getLocations();
  this.getImages();
}

getLocations():void {
  this._locationService.getLocationsLogistics().subscribe((data: Location[]) => {
  this.locations = data;
});
}
getImages():void {
  this._imageService.getImages().subscribe((data: Image[]) => {
  this.images = data;
});
}
onSubmit() {
  this._logisticsService.addLogistics(this.addLogisticsForm.value).subscribe(data => {
    this.router.navigate(['viewLogistics']);
  });
}
    
cancel() {
  this.router.navigate(['viewLogistics']);
}
}