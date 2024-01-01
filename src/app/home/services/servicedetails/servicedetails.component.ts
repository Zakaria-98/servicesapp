import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from 'src/app/@services/services.service';
import { OwlOptions } from 'node_modules/ngx-owl-carousel-o/lib/models/owl-options.model.d';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from 'src/app/@services/profile.service';
import { MatSnackBar, MatSnackBarModule, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-servicedetails',
  templateUrl: './servicedetails.component.html',
  styleUrls: ['./servicedetails.component.scss']
})
export class ServicedetailsComponent implements OnInit {
  imageSrc: any = "../../assets/img/addservice.webp";
  constructor(private _snackBar: MatSnackBar,private profile:ProfileService, private router:Router,private route:ActivatedRoute,private services:ServicesService,private formbuilder:FormBuilder) {

    this.form=this.formbuilder.group({
      serviceID: [''],
      commentText: [''],
      reviewScore: [0]
      
  
    })
  
  
   }
  id:any;
  loggedin:any=false;
  description:any;
  images:any;
  price:any;
  title:any;
  imageSrc1:any;
  img1bool:any;
  img2bool:any;
  img3bool:any;
  imageSrc2:any;
  imageSrc3:any;
  profileimg:any;
  city:any;
  username:any;
  servicetype:any;
  comments:any;
  rating:any;
  rating1:any=false;
  rating2:any=false;
  rating3:any=false;
  rating4:any=false;
  rating5:any=false;
  profileid:any;
  profilename:any;
  profileimage:any;
  isMyService:any;
  isVerificated:any=false;
  userAbstract:any;
  zerorate:any;
  form:FormGroup;

  comment:{
    commentUserID:any,
    serviceID,
    commentText,
    reviewScore
    
  }

  
  ngOnInit(): void {
if(localStorage.getItem('Token')!=null){
  this.loggedin=true;
}
    this.id=this.route.snapshot.paramMap.get('id');

    this.services.getservice(this.id)
  .subscribe({
    next: (res) => {
      console.log(res);
      this.title=res.data.title;
      this.description=res.data.description;
      this.price=res.data.price;
      this.profileimg =res.data.profileImage;
      this.username=res.data.userName;
      this.servicetype=res.data.serviceType;
      this.comments=res.data.comments;
      this.city=res.data.city;
      this.isVerificated=res.data.isVerificated;
      this.form.get("serviceID").setValue(res.data.id);
      this.rating=res.data.reviewsAverage;
      this.userAbstract=res.data.userAbstract;
      console.log(this.rating)
      if(this.rating<1){
        this.zerorate=true;
      }
      console.log("kkkk")
      console.log(this.zerorate)


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

  




this.imageSrc1=res.data.images;  
this.imageSrc2="data:image/png;base64,"+res.data.images[1];
this.imageSrc3="data:image/png;base64,"+res.data.images[2];
console.log(res.data.images[4]);

      
     
    }, error: (error) => {
     
     
      console.log(error.message);
    }
    
  })

  this.profile.getaccountbyid(localStorage.getItem("id"))
  .subscribe({
    next: (res) => {
     console.log(res);
     this.profileid=res.data.id;
     this.profilename=res.data.name;
     this.profileimage="data:image/png;base64,"+res.data.profileImage;

    
    }, error: (error) => {
      console.log("errrrrorrr"+ error.message);
    }

    
  })

  this.services.getservice(this.id)
  .subscribe({
    next: (res) => {
     console.log(res);
this.isMyService=res.data.isMyService;
console.log(this.isMyService);

    
    }, error: (error) => {
      console.log("errrrrorrr"+ error.message);
    }

    
  })



  }

  onSubmit(){
    if(!this.loggedin){
      this.openSnackBarfalse('   يجب عليك تسجيل الدخول  ','خطأ')

this.router.navigateByUrl('auth/login')
    }
    else{
    this.services.addcomment(this.form.getRawValue())
    .subscribe({
      next: (res) => {
      
     console.log(res);
     this.openSnackBar('تمت إضافة التقييم بنجاح','تقييم')
     window.location.reload();

     
      
      }, error: (error) => {
        console.log( error.message);
        this.openSnackBarfalse('   يبدو انها الخدمة الخاصة بك او انه تم التقييم مسبقا ','خطأ')

      }
  
      
    })}
  }

  star1:any;
  star2:any;
  star3:any;
  star4:any;
  star5:any;

  profilefun(){
    this.router.navigateByUrl("/home/profile/user/"+this.profileid);
  }

  ratingfun1(){
    
    
    this.star1=true;
    this.star2=false;
    this.star3=false;
    this.star4=false;
    this.star5=false;
    this.form.get("reviewScore").setValue(1);


  }

  ratingfun2(){
    this.star1=true;
    this.star2=true;
    this.star3=false;
    this.star4=false;
    this.star5=false;
    this.form.get("reviewScore").setValue(2);

  }

  ratingfun3(){
    this.star1=true;
    this.star2=true;
    this.star3=true;
    this.star4=false;
    this.star5=false;
    this.form.get("reviewScore").setValue(3);


  }

  ratingfun4(){
    this.star1=true;
    this.star2=true;
    this.star3=true;
    this.star4=true;
    this.star5=false;
    this.form.get("reviewScore").setValue(4);


  }

  ratingfun5(){
    this.star1=true;
    this.star2=true;
    this.star3=true;
    this.star4=true;
    this.star5=true;
    this.form.get("reviewScore").setValue(5);


  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    nav: true,
    navSpeed: 700,
  
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 1
      }
    },
    
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message,  action, {
      duration: 2000,
      panelClass: ['mat-toolbar', 'mat-primary']
    });
    

  }

  
  openSnackBarfalse(message: string, action: string) {
    this._snackBar.open(message,  action, {
      duration: 2000,
      panelClass: ['mat-toolbar', 'mat-warn']
    });
    

  }

  delete_service(){

    this.services.deleteservice(this.id)
    .subscribe({
      next: (res) => {
        this.openSnackBar('تم حذف الخدمة بنجاح','حذف')

        this.router.navigateByUrl("/home/main");

       console.log(res);
  
      
      }, error: (error) => {
        this.openSnackBarfalse('لم يتم حذف الخدمة','حذف')
        console.log("errrrrorrr"+ error.message);
      }
  
      
    })
  
  }

}
