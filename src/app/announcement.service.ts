import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Announcement } from './announcement';

@Injectable({
  providedIn: 'root'
})

export class AnnouncementService {

  constructor(private http:HttpClient) { }
 
  getAnnouncements() {
    return this.http.get<Announcement[]>('http://192.168.1.160/api_v2/getAnnouncements.php');
  }

  deleteAnnouncement(id: Number) {
    return this.http.delete<Announcement[]>('http://192.168.1.160/api_v2/deleteAnnouncement.php?id=' + id);
  }
  
  addAnnouncement(announcement: Announcement) {
    return this.http.post<Announcement[]>('http://192.168.1.160/api_v2/addAnnouncement.php', announcement);
  }

  getAnnouncementById(id: number) {
    return this.http.get<Announcement[]>('http://192.168.1.160/api_v2/getAnnouncementById.php?id=' + id);
  }

  updateAnnouncement(announcement: Announcement) {
    return this.http.put('http://192.168.1.160/api_v2/updateAnnouncement.php', announcement);
  }
}
