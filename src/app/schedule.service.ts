import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Schedule } from './schedule';

@Injectable({
  providedIn: 'root'
})

export class ScheduleService {
  constructor(private http:HttpClient) { }

  getSchedule() {
    return this.http.get<Schedule[]>('http://192.168.1.160/api_v2/getSchedule.php');
  }
  
  deleteSchedule(id: Number) {
    return this.http.delete<Schedule[]>('http://192.168.1.160/api_v2/deleteSchedule.php?id=' + id);
  }
  
  addSchedule(schedule: Schedule) {
    return this.http.post<Schedule[]>('http://192.168.1.160/api_v2/addSchedule.php', schedule);
  }

  getScheduleById(id: Number) {
    return this.http.get<Schedule[]>('http://192.168.1.160/api_v2/getScheduleById.php?id=' + id);
  }

  updateSchedule(schedule: Schedule) {
    return this.http.put('http://192.168.1.160/api_v2/updateSchedule.php', schedule);
  }
}