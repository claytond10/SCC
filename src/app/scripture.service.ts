import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Scripture } from './scripture';

@Injectable({
  providedIn: 'root'
})

export class ScriptureService {
  constructor(private http:HttpClient) { }

  getScriptures() {
    return this.http.get<Scripture[]>('http://192.168.1.160/api_v2/getScriptures.php');
  }
  //Sign
  getScripture() {
    return this.http.get<Scripture[]>('http://192.168.1.160/api_v2/getScripture.php');
  }
  
  deleteSchedule(id: Number) {
    return this.http.delete<Scripture[]>('http://192.168.1.160/api_v2/deleteScripture.php?id=' + id);
  }
  
  addSchedule(scripture: Scripture) {
    return this.http.post<Scripture[]>('http://192.168.1.160/api_v2/addScripture.php', scripture);
  }

  getScheduleById(id: Number) {
    return this.http.get<Scripture[]>('http://192.168.1.160/api_v2/getScriptureById.php?id=' + id);
  }

  updateSchedule(scripture: Scripture) {
    return this.http.put('http://192.168.1.160/api_v2/updateScripture.php', scripture);
  }
}