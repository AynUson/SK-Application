import { Component, OnInit, ViewChild,  ChangeDetectorRef} from '@angular/core';
import { Router } from '@angular/router';
import { MatDatepicker } from '@angular/material/datepicker';

import { MatSidenav } from '@angular/material/sidenav';
import {MatTableDataSource} from '@angular/material/table'
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import { SkProjectsComponent } from '../sk-projects/sk-projects.component';
import { MatFormFieldModule  } from '@angular/material/form-field';


@Component({
  selector: 'app-sk-dashboard',
  templateUrl: './sk-dashboard.component.html',
  styleUrls: ['./sk-dashboard.component.css']
})
export class SkDashboardComponent implements OnInit {

  constructor(public dialog: MatDialog, public router: Router ) { }

  //SIDENAV
  sidenav! : MatSidenav;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  // Modal for SK View Projects
  viewProject() {
    this.dialog.open(SkProjectsComponent);
  }

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }
  
  getSearchInput(event : any){
    console.log(event.target.value);
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

  displayedColumns: string[] = ['no', 'projectTitle', 'date', 'officerInCharge', 'venue', 'actions'];
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
  projectTitle: string;
  no: number;
  date: string;
  officerInCharge: string;
  venue: string;
}

const ELEMENT_DATA: SkProjects[] = [
  {no: 1, projectTitle: 'Tree Planting Advocacy', date: '12/20/20', officerInCharge: 'Juan Dela Cruz', venue: 'Old Cabalan'},
  {no: 2, projectTitle: 'Road Clearing Program', date: '12/20/20', officerInCharge: 'Pedro Penduko', venue: 'Sta. Rita'},
  {no: 3, projectTitle: 'Community Feeding Program', date: '12/20/20', officerInCharge: 'Jennie Lopez', venue: 'Gordon Heights'},
  {no: 4, projectTitle: 'Youth Speak 2021', date: '12/20/20', officerInCharge: 'Stella Santos', venue: 'West-Bajac-Bajac'},
  {no: 5, projectTitle: 'Blood Drive Donation', date: '12/20/20', officerInCharge: 'Stephen Cruz', venue: 'Mabayuan'},
  {no: 6, projectTitle: 'Fun Run 2021', date: '12/20/20', officerInCharge: 'Maggie De Guzman', venue: 'Old Cabalan'},
  {no: 7, projectTitle: 'Barangay Job Fair Booth', date: '12/20/20', officerInCharge: 'Anthony Morilla', venue: 'New Cabalan'},
  {no: 8, projectTitle: 'Anti-Rabies Control Program', date: '12/20/20', officerInCharge: 'Bea Adios', venue: 'New Asinan'},
  {no: 9, projectTitle: 'Organize Youth Cooperatives', date: '12/20/20', officerInCharge: 'Themarie Alfonso', venue: 'New Ilalim'},
  {no: 10, projectTitle: 'Basketball League', date: '12/20/20', officerInCharge: 'Avianna Sanchez', venue: 'West Tapinac'},
  {no: 11, projectTitle: 'Battle of the Bands', date: '12/20/20', officerInCharge: 'Clyden Ramos', venue: 'Banicain'},
  {no: 12, projectTitle: 'Eco Bricks Workshop', date: '12/20/20', officerInCharge: 'Miguel Epifania', venue: 'Barretto'},
  {no: 13, projectTitle: 'Medical and Dental Mission', date: '12/20/20', officerInCharge: 'Hera Lee', venue: 'Kalaklan'},
  {no: 14, projectTitle: 'Scholarships for Youth', date: '12/20/20', officerInCharge: 'Joe Macarena', venue: 'East Bajac-Bajac'},
  {no: 15, projectTitle: 'Free School Supplies', date: '12/20/20', officerInCharge: 'Cadmus Ty', venue: 'New Kalalake'}
  ];