import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-sk',
  templateUrl: './add-sk.component.html',
  styleUrls: ['./add-sk.component.css']
})
export class AddSkComponent implements OnInit {
  public Position: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  addSk(): void{
    let SK_Id = (<HTMLSelectElement>document.getElementById('sk_id')).innerText;
    console.log(this.Position);
    console.log(SK_Id);
  }

}
