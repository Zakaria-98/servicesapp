import { Component, OnInit } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { ServicesService } from 'src/app/@services/services.service';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from 'src/app/@services/categories.service';
import { CitiesService } from 'src/app/@services/cities.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-allservices',
  templateUrl: './allservices.component.html',
  styleUrls: ['./allservices.component.scss']
})
export class AllservicesComponent implements OnInit {
  allcategoties:any;
  allcities:any;
  form:FormGroup;
  filtercity:any='';
  filterservice:any='';
  filterkeyword:any='';
  filterrating:any;
  pages:any;
  p: number = 1;
srchservice:any;
keyword:any;

  constructor(private cities:CitiesService, private categories: CategoriesService,private route:ActivatedRoute,private services:ServicesService) {

    this.categories.allcategories()
    .subscribe({
      next: (res) => {
        console.log(res);
        this.allcategoties = res.data;
       // this.pages=res.data.pages;


      }, error: (error) => {
        console.log(error);
      }


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
    this.getResult();


   }

  ngOnInit(): void {
  }


  onSubmit(){
    this.p=1
    this.services.searchservices(this.filterkeyword,this.filtercity,this.filterservice,"",0,"",this.p,8)
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

  getResult(){

    
    this.services.searchservices('','','','',0,"",this.p,8)
    .subscribe({
      next: (res) => {
        console.log(res.data.results);
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


    this.services.searchservices(this.filterkeyword,this.filtercity,this.filterservice,'',0,"",this.p,8)
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
