import { Component, OnInit } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { ServicesService } from 'src/app/@services/services.service';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from 'src/app/@services/categories.service';
import { CitiesService } from 'src/app/@services/cities.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  allcategoties:any;
  allcities:any;
  form:FormGroup;
  filtercity:any='';
  filterservice:any='';
  filterkeyword:any='';
  filterrating:any='';
  pages:any;
  p: number = 1;
srchservice:any;
keyword:any;

  constructor(private cities:CitiesService, private categories: CategoriesService,private route:ActivatedRoute,private services:ServicesService) {
    this.route.params.subscribe(res =>{

      this.keyword = res['id'];
      this.filterkeyword="";
      
      console.log((this.keyword));
      


    })

   
    this.cities.allcities()
    .subscribe({
      next: (res) => {
        console.log(res);
        this.allcities=res.data;

       
      }, error: (error) => {
        console.log(error);
      }

      
    })

    this.services.searchservices("","",this.keyword,"",0,"",this.p,8)
    .subscribe({
      next: (res) => {
        console.log(res);""
        this.srchservice=res.data.results;
        console.log(this.srchservice);
      

       
      }, error: (error) => {
        console.log(error);
      }

      
    })
    

   }

  ngOnInit(): void {
  }

  onSubmit(){
    this.p=1
    this.services.searchservices(this.filterkeyword,this.filtercity,this.keyword,"",0,"",this.p,8)
    .subscribe({
      next: (res) => {
        console.log(res);
        this.srchservice=res.data.results;
        console.log(this.srchservice);
      

       
      }, error: (error) => {
        console.log(error);
      }

      
    })
    

  }



  onPageChange(event: any){
    console.log('تم تغيير الصفحة إلى: ', event);
    this.p=event;


    this.services.searchservices(this.filterkeyword,this.filtercity,this.keyword,"",0,"",this.p,8)
    .subscribe({
      next: (res) => {
        console.log(res);
        this.srchservice=res.data.results;
        console.log(this.srchservice);
      

       
      }, error: (error) => {
        console.log(error);
      }

      
    })



    
  }




}
