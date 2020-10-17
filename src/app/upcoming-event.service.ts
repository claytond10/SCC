import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UpcomingEvent } from './upcoming-event';
@Injectable({
  providedIn: 'root'
})
export class UpcomingEventService {
  constructor(private http:HttpClient) { }

  getUpcomingEvents() {
    return this.http.get<UpcomingEvent[]>('http://192.168.1.160/api_v2/getUpcomingEvents.php');
  }
  
  deleteUpcomingEvent(id: Number) {
    return this.http.delete<UpcomingEvent[]>('http://192.168.1.160/api_v2/deleteUpcomingEvent.php?id=' + id);
  }
  
  addUpcomingEvent(upcomingEvent: UpcomingEvent) {
    return this.http.post<UpcomingEvent[]>('http://192.168.1.160/api_v2/addUpcomingEvent.php', upcomingEvent);
  }

  getUpcomingEventById(id: Number) {
    return this.http.get<UpcomingEvent[]>('http://192.168.1.160/api_v2/getUpcomingEventById.php?id=' + id);
  }

  updateUpcomingEvent(upcomingEvent: UpcomingEvent) {
    return this.http.put('http://192.168.1.160/api_v2/updateUpcomingEvent.php', upcomingEvent);
  }
}

