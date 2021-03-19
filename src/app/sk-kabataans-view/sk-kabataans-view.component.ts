import { Component, OnInit, ViewChild,  ChangeDetectorRef} from '@angular/core';
import { Router } from '@angular/router';

import { MatSidenav } from '@angular/material/sidenav';
import {MatTableDataSource} from '@angular/material/table'
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import { SkPositionComponent } from '../sk-position/sk-position.component';
import { KabataanInfoComponent } from '../kabataan-info/kabataan-info.component';

@Component({
  selector: 'app-sk-kabataans-view',
  templateUrl: './sk-kabataans-view.component.html',
  styleUrls: ['./sk-kabataans-view.component.css']
})
export class SkKabataansViewComponent implements OnInit {

  constructor(public dialog: MatDialog, public router: Router ) { }

  //SIDENAV
  sidenav! : MatSidenav;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  // Modal for SK View Projects
  addPosition() {
    this.dialog.open(SkPositionComponent);
  }

  redirectToDashboard(){
    this.router.navigate(['/sk-dashboard']);
  }
  
  redirectToProjects(){
    this.router.navigate(['/sk-projects-view']);
  }

  redirectToEvents(){
    this.router.navigate(['/sk-events-view']);
  }

  redirectToActivities(){
    this.router.navigate(['/sk-activities-view']);
  }

  redirectToKabataans(){
    this.router.navigate(['/sk-kabataans-view']);
  }

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

  viewKabataans(): void{
    this.dialog.open(KabataanInfoComponent);
  }

  displayedColumns: string[] = ['no', 'kabataanName', 'address', 'actions'];
  dataSource = new MatTableDataSource<SkProjects>(ELEMENT_DATA);



  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  
  }

export interface SkProjects {
  kabataanName: string;
  no: number;
  address: string;
  // officerInCharge: string;
  // venue: string;
}

const ELEMENT_DATA: SkProjects[] = [
  {no: 1, kabataanName: 'Mae Jezriel Llanes', address:'Brgy. Old Cabalan, Olongapo City'},
  {no: 2, kabataanName: 'Daryl Tadeo', address:'Brgy. Sta Rita, Olongapo City'},
  {no: 3, kabataanName: 'Austin Ray Aranda', address:'Brgy. Gordon Heights, Olongapo City'},
  {no: 4, kabataanName: 'Ryunosuke Fujii', address:'Brgy. New Kalalake, Olongapo City'},
  {no: 5, kabataanName: 'Geraldyne Ambrocio', address:'Brgy. Old Cabalan, Olongapo City'},
  {no: 6, kabataanName: 'Claridad Ignacio', address:'Brgy. Old Cabalan, Olongapo City'},
  {no: 7, kabataanName: 'Ryan Policarpio', address:'Brgy. WBB, Olongapo City'},
  {no: 8, kabataanName: 'Jillian Solidad', address:'Brgy. Banicain, Olongapo City'},
  {no: 9, kabataanName: 'Augustus Gonzaga', address:'Brgy. New Cabalan, Olongapo City'},
  {no: 10, kabataanName: 'George Hilario', address:'Brgy. EBB, Olongapo City'},
  ];