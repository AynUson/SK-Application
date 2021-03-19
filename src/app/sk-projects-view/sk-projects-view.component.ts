import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sk-projects-view',
  templateUrl: './sk-projects-view.component.html',
  styleUrls: ['./sk-projects-view.component.css']
})
export class SkProjectsViewComponent implements OnInit {
  panelOpenState = false;
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
