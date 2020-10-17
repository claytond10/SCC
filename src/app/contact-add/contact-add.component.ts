import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.css']
})

export class ContactAddComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, 
              private _contactService: ContactService,
              private router: Router) { }

  addContactForm: FormGroup;
  ngOnInit() {
    this.addContactForm = this.formBuilder.group({
      id:[''],
      contact_name:['', [Validators.required, Validators.maxLength(50)]],
      phone:['', [Validators.required, Validators.maxLength(12)]],
      email:['', [Validators.required, Validators.maxLength(50)]],
    });
  }

  onSubmit() {
    console.log("onSubmit");
    console.log(this.addContactForm.value);
    this._contactService.addContact(this.addContactForm.value).subscribe(data => {
      this.router.navigate(['viewContacts']);
    });
  }

}
