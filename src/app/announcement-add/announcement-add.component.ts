import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AnnouncementService } from '../announcement.service';

@Component({
  selector: 'app-announcement-add',
  templateUrl: './announcement-add.component.html',
  styleUrls: ['./announcement-add.component.css']
})

export class AnnouncementAddComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, 
    private _announcementService: AnnouncementService,
    private router: Router) { }

addAnnouncementForm: FormGroup;
ngOnInit() {
  this.addAnnouncementForm = this.formBuilder.group({
  id:[''],
  announcement:['', [Validators.required, Validators.maxLength(100)]],
});
}

onSubmit() {
    this._announcementService.addAnnouncement(this.addAnnouncementForm.value).subscribe(data => {
    this.router.navigate(['viewAnnouncements']);
});
}

cancel() {
  this.router.navigate(['viewAnnouncements']);
}
}
