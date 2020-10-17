import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, Params, ActivatedRoute } from '@angular/router';

import { ImageService } from '../image.service';

@Component({
  selector: 'image-contact-edit',
  templateUrl: './image-edit.component.html',
  styleUrls: ['./image-edit.component.css']
})

export class ImageEditComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, 
              private _imageService: ImageService,
              private router: Router,
              private routes: ActivatedRoute) { }

  editImageForm: FormGroup;

  ngOnInit() {
    const routeParams = this.routes.snapshot.params;

    this._imageService.getImageById(routeParams.id).subscribe((data: any) => {
      this.editImageForm.patchValue(data);
    });

    this.editImageForm = this.formBuilder.group({
      id:[''],
      image_html:['', [Validators.required, Validators.maxLength(50)]],
      image_name:['', [Validators.required, Validators.maxLength(25)]],
    });
  }

  update() {
    console.log('Update');
    this._imageService.updateImage(this.editImageForm.value).subscribe(data => {
      this.router.navigate(['viewImages']);
    });
  }

  cancel() {
    this.router.navigate(['viewImages']);
  }

}
