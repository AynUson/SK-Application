import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sk-events-view',
  templateUrl: './sk-events-view.component.html',
  styleUrls: ['./sk-events-view.component.css']
})
export class SkEventsViewComponent implements OnInit {

  sidenav! : MatSidenav;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

  getSearchInput(event : any){
    console.log(event.target.value);
  }

  constructor( private router : Router) { }

  ngOnInit(): void {
  }

}
