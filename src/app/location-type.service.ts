import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocationType } from './location-type';

@Injectable({
  providedIn: 'root'
})

export class LocationTypeService {

  constructor(private http:HttpClient) { }

  getLocationTypes() {
    return this.http.get<LocationType[]>('http://192.168.1.160/api_v2/getLocationTypes.php');
  }

  deleteLocationType(id: String) {
    return this.http.delete<LocationType[]>('http://192.168.1.160/api_v2/deleteLocationType.php?id=' + id);
  }
  
  addLocationType(locationType: LocationType) {
    return this.http.post<LocationType[]>('http://192.168.1.160/api_v2/addLocationType.php', locationType);
  }

  getLocationTypeById(id: String) {
    return this.http.get<LocationType[]>('http://192.168.1.160/api_v2/getLocationTypeById.php?id=' + id);
  }

  updateLocationType(locationType: LocationType) {
   return this.http.put('http://192.168.1.160/api_v2/updateLocationType.php', locationType);
  }
}