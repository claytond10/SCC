import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { LogisticsService } from '../logistics.service';
import { LocationService } from '../location.service';
import { Location } from '../location';

@Component({
  selector: 'app-logistics-edit',
  templateUrl: './logistics-edit.component.html',
  styleUrls: ['./logistics-edit.component.css']
})

export class LogisticsEditComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, 
    private _logisticsService: LogisticsService,
    private _locationService: LocationService,
    private router: Router,
    private routes: ActivatedRoute) { }

    editLogisticsForm: FormGroup;
    locations: Location[];
    
    ngOnInit() {
      const routeParams = this.routes.snapshot.params;
      this._logisticsService.getLogisticsById(routeParams.id).subscribe((data: any) => {
        this.editLogisticsForm.patchValue(data);
      });

      this.editLogisticsForm = this.formBuilder.group({
        log_id:[''],
        log_name:['', [Validators.required, Validators.maxLength(25)]],
        location_id:[''],
      });
      this.getLocations();
    }

    getLocations():void {
      this._locationService.getLocationsLogistics().subscribe((data: Location[]) => {
      this.locations = data;
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
