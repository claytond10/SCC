import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})

export class ContactService {

  constructor(private http:HttpClient) { }

  getContacts() {
    return this.http.get<Contact[]>('http://192.168.1.160/api_v2/getContacts.php');
  }

  deleteContact(id: Number) {
    return this.http.delete<Contact[]>('http://192.168.1.160/api_v2/deleteContact.php?id=' + id);
  }
  
  addContact(contact: Contact) {
    return this.http.post<Contact[]>('http://192.168.1.160/api_v2/addContact.php', contact);
  }

  getContactById(id: number) {
    return this.http.get<Contact[]>('http://192.168.1.160/api_v2/getContactById.php?id=' + id);
  }

  updateContact(contact: Contact) {
    return this.http.put('http://192.168.1.160/api_v2/updateContact.php', contact);
  }
}

