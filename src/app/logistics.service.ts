import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Logistics } from './logistics';

@Injectable({
  providedIn: 'root'
})
export class LogisticsService {

  constructor(private http:HttpClient) { }

  getLogistics() {
    return this.http.get<Logistics[]>('http://192.168.1.160/api_v2/getLogistics.php');
  }

  deleteLogistics(id: Number) {
    return this.http.delete<Logistics[]>('http://192.168.1.160/api_v2/deleteLogistics.php?id=' + id);
  }
  
  addLogistics(logistics: Logistics) {
    return this.http.post<Logistics[]>('http://192.168.1.160/api_v2/addLogistics.php', logistics);
  }

  getLogisticsById(id: Number) {
    return this.http.get<Logistics[]>('http://192.168.1.160/api_v2/getLogisticsById.php?id=' + id);
  }

  updateLogistics(logistics: Logistics) {
  return this.http.put('http://192.168.1.160/api_v2/updateLogistics.php', logistics);
  }
}



