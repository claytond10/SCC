import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AnnouncementService } from '../announcement.service';
import { Announcement } from '../announcement';

@Component({
  selector: 'app-announcement-view',
  templateUrl: './announcement-view.component.html',
  styleUrls: ['./announcement-view.component.css']
})

export class AnnouncementViewComponent implements OnInit {
  announcements: Announcement[];
  _id: any;

  constructor(private _announcementService: AnnouncementService,
              private router: Router) { }

  ngOnInit() {
    this._announcementService.getAnnouncements().subscribe((data: Announcement[]) => {
      this.announcements = data;
    });
  }

  delete(announcements: Announcement):void {
    this._announcementService.deleteAnnouncement(announcements.id).subscribe(data=>{
      this.announcements = this.announcements.filter(u => u !== announcements);
    });
  }

  click_add() {
    this.router.navigate(['addAnnouncement']);
  }

  add(announcements: Announcement):void {
    this._announcementService.addAnnouncement(announcements).subscribe(data=>{
      this.announcements = this.announcements.filter(u => u !== announcements);
    });
  }

   edit(announcements: Announcement) {
    this.router.navigate(['editAnnouncement/' + announcements.id]);
  }
}
