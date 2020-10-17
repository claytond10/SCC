import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, Params, ActivatedRoute } from '@angular/router';

import { AnnouncementService } from '../announcement.service';

@Component({
  selector: 'app-announcement-edit',
  templateUrl: './announcement-edit.component.html',
  styleUrls: ['./announcement-edit.component.css']
})
export class AnnouncementEditComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, 
    private _announcementService: AnnouncementService,
    private router: Router,
    private routes: ActivatedRoute) { }

editAnnouncementForm: FormGroup;

ngOnInit() {

const routeParams = this.routes.snapshot.params;

  this._announcementService.getAnnouncementById(routeParams.id).subscribe((data: any) => {
    this.editAnnouncementForm.patchValue(data);
  });

  this.editAnnouncementForm = this.formBuilder.group({
    id:[''],
    announcement:['', [Validators.required, Validators.maxLength(100)]],
  });
}

update() {
  this._announcementService.updateAnnouncement(this.editAnnouncementForm.value).subscribe(data => {
  this.router.navigate(['viewAnnouncements']);
});
}

cancel() {
  this.router.navigate(['viewAnnouncements']);
}
}