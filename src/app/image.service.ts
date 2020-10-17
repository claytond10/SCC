import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Image } from './image';

@Injectable({
  providedIn: 'root'
})

export class ImageService {

  constructor(private http:HttpClient) { }

  getImages() {
    return this.http.get<Image[]>('http://192.168.1.160/api_v2/getImages.php');
  }

  deleteImage(id: Number) {
    return this.http.delete<Image[]>('http://192.168.1.160/api_v2/deleteImage.php?id=' + id);
  }
  
  addImage(image: Image) {
    return this.http.post<Image[]>('http://192.168.1.160/api_v2/addImage.php', image);
  }

  getImageById(id: number) {
    return this.http.get<Image[]>('http://192.168.1.160/api_v2/getImageById.php?id=' + id);
  }

  updateImage(image: Image) {
    return this.http.put('http://192.168.1.160/api_v2/updateImage.php', image);
  }
}
