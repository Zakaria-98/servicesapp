import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../@services/login.service';
import { ProfileService } from '../@services/profile.service';
import { LoadingService } from '../@services/loading.service';
import { MatSnackBar, MatSnackBarModule, MatSnackBarRef } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  durationInSeconds = 5;

  constructor(private _snackBar: MatSnackBar, private router:Router,private login:LoginService ,private profile:ProfileService,public load:LoadingService) { }
  search_array:any;
  profileimg:any;
  keyword:any='';
  username:any;
  loggedin:any=false;



  //if()



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

  searchbtn(word:any){
   // this.router.navigateByUrl("/home/search/word/"+word);
    this.router.navigate(['/home/search/word/', word]);
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


