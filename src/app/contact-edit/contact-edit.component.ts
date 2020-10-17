import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, Params, ActivatedRoute } from '@angular/router';

import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})

export class ContactEditComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, 
              private _contactService: ContactService,
              private router: Router,
              private routes: ActivatedRoute) { }

  editContactForm: FormGroup;

  ngOnInit() {
    const routeParams = this.routes.snapshot.params;
    this._contactService.getContactById(routeParams.id).subscribe((data: any) => {
    });

    this.editContactForm = this.formBuilder.group({
      id:[''],
      contact_name:['', [Validators.required, Validators.maxLength(50)]],
      phone:['', [Validators.required, Validators.maxLength(12)]],
      email:['', [Validators.required, Validators.maxLength(50)]],
    });
  }

  update() {
    this._contactService.updateContact(this.editContactForm.value).subscribe(data => {
      this.router.navigate(['viewContacts']);
    });
  }

  cancel() {
    this.router.navigate(['viewContacts']);
  }

}
