import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ContactService } from '../contact.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.css']
})

export class ContactViewComponent implements OnInit {
  contacts: Contact[];
  _id: any;

  constructor(private _contactService: ContactService,
              private router: Router) { }

  ngOnInit() {
    this._contactService.getContacts().subscribe((data: Contact[]) => {
      this.contacts = data;
    });
  }

  delete(contacts: Contact):void {
    this._contactService.deleteContact(contacts.id).subscribe(data=>{
      this.contacts = this.contacts.filter(u => u !== contacts);
    });
  }

  click_add() {
    this.router.navigate(['addContact']);
  }

  add(contacts: Contact):void {
    this._contactService.addContact(contacts).subscribe(data=>{
      this.contacts = this.contacts.filter(u => u !== contacts);
    });
  }

   edit(contacts: Contact) {
    this._id = contacts.id;
    this.router.navigate(['editContact/' + this._id]);
  }
}