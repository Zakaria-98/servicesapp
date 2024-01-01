import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/@services/categories.service';
import { LoadingService } from 'src/app/@services/loading.service';
import { LoginService } from 'src/app/@services/login.service';
import { ServicesService } from 'src/app/@services/services.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private loadingser:LoadingService,private login :LoginService,private categories:CategoriesService,private services:ServicesService) { }
category:any
allservices:any;
emptyArray: any[] = [];
secondArray: any[] = [];


  ngOnInit(): void {


    this.services.searchservices('','','','',0,'',1,8)
    .subscribe({
      next: (res) => {
        this.loadingser.isLoading.next(true)
        console.log(res);
        this.allservices=res.data.results;
        console.log(this.allservices);
      
        this.loadingser.isLoading.next(false)
       
      }, error: (error) => {
        console.log(error);
      }

      
    })
 
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

  servicefun(event:any){
    console.log(event.target.value);
   // this.router.navigateByUrl("/home/service/");

  }


  
}
