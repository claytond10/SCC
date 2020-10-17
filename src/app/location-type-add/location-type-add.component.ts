import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LocationTypeService } from '../location-type.service';

@Component({
  selector: 'app-location-type-add',
  templateUrl: './location-type-add.component.html',
  styleUrls: ['./location-type-add.component.css']
})

export class LocationTypeAddComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, 
    private _locationTypeService: LocationTypeService,
    private router: Router) { }

addLocationTypeForm: FormGroup;

ngOnInit() {
  this.addLocationTypeForm = this.formBuilder.group({
    loc_cd:['', [Validators.required, Validators.maxLength(2)]],
    loc_cd_full:['', [Validators.required, Validators.maxLength(25)]],
  });
}

onSubmit() {
  this._locationTypeService.addLocationType(this.addLocationTypeForm.value).subscribe(data => {
    this.router.navigate(['viewLocationTypes']);
  });
}

}
