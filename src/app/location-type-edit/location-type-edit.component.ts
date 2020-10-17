import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, Params, ActivatedRoute } from '@angular/router';

import { LocationTypeService } from '../location-type.service';

@Component({
  selector: 'app-location-type-edit',
  templateUrl: './location-type-edit.component.html',
  styleUrls: ['./location-type-edit.component.css']
})

export class LocationTypeEditComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, 
    private _locationTypeService: LocationTypeService,
    private router: Router,
    private routes: ActivatedRoute) { }

editLocationTypeForm: FormGroup;

ngOnInit() {
  const routeParams = this.routes.snapshot.params;

  this._locationTypeService.getLocationTypeById(routeParams.id).subscribe((data: any) => {
    this.editLocationTypeForm.patchValue(data);
  });

  this.editLocationTypeForm = this.formBuilder.group({
    loc_cd:['', [Validators.required, Validators.maxLength(2)]],
    loc_cd_full:['', [Validators.required, Validators.maxLength(25)]],
  });
}

update() {
  this._locationTypeService.updateLocationType(this.editLocationTypeForm.value).subscribe(data => {
    this.router.navigate(['viewLocationTypes']);
  });
}

cancel() {
  this.router.navigate(['viewLocationTypes']);
}
}
