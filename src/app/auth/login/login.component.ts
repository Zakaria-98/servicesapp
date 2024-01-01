import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from 'src/app/@services/loading.service';
import { LoginService } from 'src/app/@services/login.service';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public load:LoadingService,private login:LoginService, private router:Router) { }
email:any ;
password:any;
errorMessage:any;
invalidvar:any=false;


  ngOnInit(): void {
    localStorage.removeItem('Token')
    localStorage.removeItem('rule')
    console.log(this.email);
    console.log(this.password);
    

  }

  onSubmit(){

    
    console.log(this.email);

    console.log(this.password);

    
     
    this.login.loginfun(this.email,this.password)
    .subscribe({
      next: (res) => {
        console.log(res);
        localStorage.setItem("Token", res.data.token)
        localStorage.setItem("id", res.data.id)
        localStorage.setItem("rule", res.data.role)
        this.errorMessage=" "
        if(res.data.role==1)
        this.router.navigateByUrl("/admin/services");
        if(res.data.role==2)
        this.router.navigateByUrl("/home/main");
      }, error: (error) => {
        this.invalidvar=true;
        this.errorMessage=error.message
        console.log(error.message);
      }

      
    })
  }

  
registerbtn(){
  this.router.navigateByUrl("auth/register");
}

forgetbtn(){
  this.router.navigateByUrl("auth/register/forget");

}

}
