import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ScriptureService } from '../scripture.service';
import { Scripture } from '../scripture';

@Component({
  selector: 'app-scriptures-view',
  templateUrl: './scriptures-view.component.html',
  styleUrls: ['./scriptures-view.component.css']
})

export class ScripturesViewComponent implements OnInit {
  scripture: Scripture[];
  _id: any;

  constructor(private _scriptureService: ScriptureService,
              private router: Router) { }

  ngOnInit() {
    this._scriptureService.getScriptures().subscribe((data: Scripture[]) => {
      this.scripture = data;
    });
  }
  
  delete(scripture: Scripture):void {
    this._scriptureService.deleteSchedule(scripture.id).subscribe(data=>{
      this.scripture = this.scripture.filter(u => u !== scripture);
    });
  }

  click_add() {
    this.router.navigate(['addScripture']);
  }
  
  add(scripture: Scripture):void {
    this._scriptureService.addSchedule(scripture).subscribe(data=>{
      this.scripture = this.scripture.filter(u => u !== scripture);
    });
  }

    edit(scripture: Scripture) {
    this.router.navigate(['editScripture/' + scripture.id]);

  }

}

