import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-sk-position',
  templateUrl: './sk-position.component.html',
  styleUrls: ['./sk-position.component.css']
})
export class SkPositionComponent implements OnInit {

  

  constructor( public dataService : DataService) { }

  ngOnInit(): void {
  }

    // ADD POSITION
    posName: any;
    positionsData: any = {};
    newData: any;
    
  addPosition(){
    this.positionsData.pos_name = this.posName;
    console.log(this.positionsData);
    this.dataService.sendApiRequest("insertposition/", this.positionsData).subscribe((data: any) => {
     // console.log(this.b);
      this.newData = data.payload;
      console.log(this.newData);
     })
  }
}
