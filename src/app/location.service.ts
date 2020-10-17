import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from './location';

@Injectable({
  providedIn: 'root'
})

export class LocationService {

  constructor(private http:HttpClient) { }

  getLocations() {
    return this.http.get<Location[]>('http://192.168.1.160/api_v2/getLocations.php');
  }

  getLocationsUpcomingEvents(){
    return this.http.get<Location[]>('http://192.168.1.160/api_v2/getLocationsUpcomingEvents.php');
  }

  getLocationsLogistics(){
    return this.http.get<Location[]>('http://192.168.1.160/api_v2/getLocationsLogistics.php');
  }

  deleteLocation(id: Number) {
    return this.http.delete<Location[]>('http://192.168.1.160/api_v2/deleteLocation.php?id=' + id);
  }
  
  addLocation(location: Location) {
    return this.http.post<Location[]>('http://192.168.1.160/api_v2/addLocation.php', location);
  }

  getLocationById(id: Number) {
    return this.http.get<Location[]>('http://192.168.1.160/api_v2/getLocationById.php?id=' + id);
  }

  updateLocation(location: Location) {
  return this.http.put('http://192.168.1.160/api_v2/updateLocation.php', location);
  }
}
