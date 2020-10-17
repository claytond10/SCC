import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LogisticsService } from '../logistics.service';
import { LocationService } from '../location.service';
import { Location } from '../location';

@Component({
  selector: 'app-logistics-add',
  templateUrl: './logistics-add.component.html',
  styleUrls: ['./logistics-add.component.css']
})

export class LogisticsAddComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, 
    private _logisticsService: LogisticsService,
    private _locationService: LocationService,
    private router: Router) { }

addLogisticsForm: FormGroup;
locations: Location[];

ngOnInit() {
  this.addLogisticsForm = this.formBuilder.group({
    log_id:[''],
    log_name:['', [Validators.required, Validators.maxLength(25)]],
    loc_id:[''],
  });
  this.getLocations();
}

getLocations():void {
  this._locationService.getLocationsLogistics().subscribe((data: Location[]) => {
  this.locations = data;
});
}

onSubmit() {
  this._logisticsService.addLogistics(this.addLogisticsForm.value).subscribe(data => {
    this.router.navigate(['viewLogistics']);
  });
}
}