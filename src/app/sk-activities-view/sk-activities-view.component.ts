import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sk-activities-view',
  templateUrl: './sk-activities-view.component.html',
  styleUrls: ['./sk-activities-view.component.css']
})
export class SkActivitiesViewComponent implements OnInit {

  constructor( private router : Router) { }

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

  ngOnInit(): void {
  }

}
