import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ImageService } from '../image.service';

@Component({
  selector: 'app-image-add',
  templateUrl: './image-add.component.html',
  styleUrls: ['./image-add.component.css']
})
export class ImageAddComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, 
              private _imageService: ImageService,
              private router: Router) { }

  addImageForm: FormGroup;
  ngOnInit() {
    this.addImageForm = this.formBuilder.group({
      id:[''],
      image_html:['', [Validators.required, Validators.maxLength(50)]],
      image_name:['', [Validators.required, Validators.maxLength(25)]],
    });
  }

  onSubmit() {
    this._imageService.addImage(this.addImageForm.value).subscribe(data => {
      this.router.navigate(['viewImages']);
    });
  }

}
