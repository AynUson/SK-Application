import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddSkComponent } from '../add-sk/add-sk.component';

@Component({
  selector: 'app-kabataan-info',
  templateUrl: './kabataan-info.component.html',
  styleUrls: ['./kabataan-info.component.css']
})
export class KabataanInfoComponent implements OnInit {

  public kabataanName : string = "";
  public kabataanAddress : string = "";

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  viewAddSkModal(): void{
    this.dialog.open(AddSkComponent);
  }

}
