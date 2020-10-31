import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { LogisticsService } from '../logistics.service';
import { LocationService } from '../location.service';
import { Location } from '../location';
import { ImageService } from '../image.service';
import { Image } from '../image';

@Component({
  selector: 'app-logistics-edit',
  templateUrl: './logistics-edit.component.html',
  styleUrls: ['./logistics-edit.component.css']
})

export class LogisticsEditComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, 
    private _logisticsService: LogisticsService,
    private _locationService: LocationService,
    private _imageService: ImageService,
    private router: Router,
    private routes: ActivatedRoute) { }

    editLogisticsForm: FormGroup;
    locations: Location[];
    images: Image[];

    ngOnInit() {
      const routeParams = this.routes.snapshot.params;
      this._logisticsService.getLogisticsById(routeParams.id).subscribe((data: any) => {
        this.editLogisticsForm.patchValue(data);
      });

      this.editLogisticsForm = this.formBuilder.group({
        log_id:[''],
        log_name:['', [Validators.required, Validators.maxLength(25)]],
        location_id:[''],
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
    update() {
      this._logisticsService.updateLogistics(this.editLogisticsForm.value).subscribe(data => {
      this.router.navigate(['viewLogistics']);
    });
    }
    
    cancel() {
      this.router.navigate(['viewLogistics']);
    }
}
