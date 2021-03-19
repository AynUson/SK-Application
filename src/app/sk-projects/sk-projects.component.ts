import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-sk-projects',
  templateUrl: './sk-projects.component.html',
  styleUrls: ['./sk-projects.component.css']
})

export class SkProjectsComponent implements OnInit {

 
   public projectName: string = '';
   public projectDescription: string = '';
   public selectedProjectType: string = '';
   public projectVenue: string = '';
   public projectDate: string = '';
   public projectOfficer: string = '';

  constructor() { }

  ngOnInit(): void {
  }
  
    // UPLOAD HANDLER
    // UPLOAD HANDLER
  imageToUpload!: File;
  imgSrc: string = "assets/logo/user.png";
    onUploadHandler(file: any) {
      this.imageToUpload = file.target.files[0];
    //  console.log(this.imageToUpload.name,this.imageToUpload.type,this.imageToUpload.size);
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.imgSrc = event.target.result;
      }
      reader.readAsDataURL(this.imageToUpload);
    }

    projectData: any = {};
    getAddNewProjectPlan(): void{
      this.projectData.p_title = this.projectName;
      this.projectData.p_description = this.projectDescription;
      this.projectData.p_type = this.selectedProjectType;
      this.projectData.p_venue = this.projectVenue;
      this.projectData.p_date = this.projectDate;
      this.projectData.p_inCharge = this.projectOfficer;
      this.projectData.p_projImage = this.imageToUpload;
      console.log(this.projectData);
      Swal.fire(
        'Success!',
        'Project Added Successfully!',
        'success'
      )
      }
    
}
