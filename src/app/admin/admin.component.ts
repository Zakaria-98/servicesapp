import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ColDef } from 'ag-grid-community';
import { LoadingService } from '../@services/loading.service';
import { LoginService } from '../@services/login.service';
import { ProfileService } from '../@services/profile.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private profile:ProfileService,private router:Router,public load:LoadingService,private login:LoginService) { }

 
  search_array:any;
  profileimg:any;
  keyword:any='';
  username:any;
  loggedin:any=false;
   


  ngOnInit(): void {
    if(localStorage.getItem('Token')!=null){
      this.loggedin=true;
    }
    this.search_array=["zakaria","abozaid"];
    this.profile.getaccountbyid(localStorage.getItem("id"))
    .subscribe({
      next: (res) => {
       console.log(res);
        this.username=res.data.name;
        
       this.profileimg="data:image/png;base64,"+res.data.profileImage;

      
      }, error: (error) => {
        console.log("errrrrorrr"+ error.message);
      }

      
    })


  }


  categoriesbtn(){
    this.router.navigateByUrl("admin/categories");
  }

  usersbtn(){
    this.router.navigateByUrl("admin/users");

  }

  servicesbtn(){
    this.router.navigateByUrl("admin/services");
  }

  adminsbtn(){
    this.router.navigateByUrl("admin/admins");
  }

  citiesbtn(){
    this.router.navigateByUrl("admin/cities");
  }

  homebtn(){
    this.router.navigateByUrl("home/main");
  }

  addbtn(){
    this.router.navigateByUrl("home/service/add");
  }

  loginbtn(){
    this.router.navigateByUrl("auth/login");
  }


  firstbtn(){
    this.router.navigateByUrl("/home/profile/account");

  }

  secondbtn(){
    this.router.navigateByUrl("/home/profile/user/"+localStorage.getItem('id'));

  }

  thirdbtn(){
    this.router.navigateByUrl("/landing");
    this.login.logOut();


  }


}
