import { Component, OnInit } from '@angular/core';

import { AnnouncementService } from '../announcement.service';
import { Announcement } from '../announcement';

@Component({
  selector: 'app-marquee-view',
  templateUrl: './marquee-view.component.html',
  styleUrls: ['./marquee-view.component.css']
})

export class MarqueeViewComponent implements OnInit {
  announcements: Announcement[];
  _id: any;
  constructor(private _announcementService: AnnouncementService) { }

  ngOnInit() {
    this._announcementService.getAnnouncements().subscribe((data: Announcement[]) => {
      this.announcements = data;
    });
  }

}
