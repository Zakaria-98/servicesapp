import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/@services/categories.service';
import { ProfileService } from 'src/app/@services/profile.service';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from 'src/app/@services/services.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  srchservice: any;
  constructor(private profile:ProfileService,private services:ServicesService,private route:ActivatedRoute, private router:Router) { }
id:any;
name:any;
abstract:any;
city:any;
phone:any;
profileimg:any;
rating1:any=false;
rating2:any=false;
rating3:any=false;
rating4:any=false;
rating5:any=false;
rating:any;
zerorate:any;
profileid:any;
email:any;
  ngOnInit(): void {
    this.profileid=this.route.snapshot.paramMap.get('id');
    if(this.profileid!=null){
      this.profile.getaccountbyid(localStorage.getItem("id"))
      .subscribe({
        next: (res) => {
         console.log(res);
         this.id=res.data.id;
         this.name=res.data.name;
         this.abstract=res.data.abstract;
         this.city=res.data.cityName;
         this.email=res.data.email;
         this.id=res.data.id;
         this.phone=res.data.phoneNumber;
         this.profileimg="data:image/png;base64,"+res.data.profileImage;
  
         this.rating=res.data.reviewsAverage;
          if(this.rating<1){
            this.zerorate=true;
          }
         
         if(this.rating==1 || this.rating>1)
         this.rating1=true;
         if(this.rating==2|| this.rating>2)
         this.rating2=true;
   
         if(this.rating==3 || this.rating>3)
         this.rating3=true;
   
         if(this.rating==4|| this.rating>4)
         this.rating4=true;
   
         if(this.rating==5)
         this.rating5=true;
   
        
        }, error: (error) => {
          console.log("errrrrorrr"+ error.message);
        }
  
        
      })
    
      }
    if(this.profileid==null){
      this.profile.getaccountbyid(localStorage.getItem("id"))
      .subscribe({
        next: (res) => {
         console.log(res);
         this.id=res.data.id;
         this.name=res.data.name;
         this.abstract=res.data.abstract;
         this.city=res.data.city;
         this.id=res.data.id;
         this.phone=res.data.phoneNumber;
         this.profileimg="data:image/png;base64,"+res.data.profileImage;
  
         this.rating=res.data.reviewsAverage;
          if(this.rating<1){
            this.zerorate=true;
          }
         
         if(this.rating==1 || this.rating>1)
         this.rating1=true;
         if(this.rating==2|| this.rating>2)
         this.rating2=true;
   
         if(this.rating==3 || this.rating>3)
         this.rating3=true;
   
         if(this.rating==4|| this.rating>4)
         this.rating4=true;
   
         if(this.rating==5)
         this.rating5=true;
   
        
        }, error: (error) => {
          console.log("errrrrorrr"+ error.message);
        }
  
        
      })
    
  
    }

    this.services.searchservices("","",'',this.profileid,0,"",1,100)
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




}
