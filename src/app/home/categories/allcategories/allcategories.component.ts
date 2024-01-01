import { Component, OnInit } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { ServicesService } from 'src/app/@services/services.service';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from 'src/app/@services/categories.service';
import { CitiesService } from 'src/app/@services/cities.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-allcategories',
  templateUrl: './allcategories.component.html',
  styleUrls: ['./allcategories.component.scss']
})
export class AllcategoriesComponent implements OnInit {
category:any;
p: number = 1;

  constructor(private categories:CategoriesService) {
    this.categories.allcategories()
    .subscribe({
      next: (res) => {
        console.log(res);
        this.category=res.data;
        
         //this.secondArray=res.data.image.map((value) => "data:image/png;base64,"+ value);
       
       
      }, error: (error) => {
        console.log(error);
      }

      
    })


   }

  ngOnInit(): void {
  }


  onSubmit(){

  }




}
