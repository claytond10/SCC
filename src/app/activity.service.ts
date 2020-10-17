import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Activity } from './activity';
@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private http:HttpClient) { }

  getActivities() {
    return this.http.get<Activity[]>('http://192.168.1.160/api_v2/getActivities.php');
  }
  
  deleteActivity(id: Number) {
    return this.http.delete<Activity[]>('http://192.168.1.160/api_v2/deleteActivity.php?id=' + id);
  }
  
  addActivity(activity: Activity) {
    return this.http.post<Activity[]>('http://192.168.1.160/api_v2/addActivity.php', activity);
  }

  getActivityById(id: number) {
    return this.http.get<Activity[]>('http://192.168.1.160/api_v2/getActivityById.php?id=' + id);
  }

  updateActivity(activity: Activity) {
    return this.http.put('http://192.168.1.160/api_v2/updateActivity.php', activity);
  }
}
