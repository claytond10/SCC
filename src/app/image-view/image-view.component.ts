import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ImageService } from '../image.service';
import { Image } from '../image';

@Component({
  selector: 'app-image-view',
  templateUrl: './image-view.component.html',
  styleUrls: ['./image-view.component.css']
})

export class ImageViewComponent implements OnInit {
  images: Image[];
  _id: any;

  constructor(private _imageService: ImageService,
              private router: Router) { }

  ngOnInit() {
    this._imageService.getImages().subscribe((data: Image[]) => {
      this.images = data;
    });
  }

  delete(images: Image):void {
    this._imageService.deleteImage(images.id).subscribe(data=>{
      this.images = this.images.filter(u => u !== images);
    });
  }

  click_add() {
    this.router.navigate(['addImage']);
  }

  add(images: Image):void {
    this._imageService.addImage(images).subscribe(data=>{
      this.images = this.images.filter(u => u !== images);
    });
  }

   edit(images: Image) {
    this.router.navigate(['editImage/' + images.id]);
  }
}