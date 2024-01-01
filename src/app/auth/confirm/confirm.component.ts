import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { LoadingService } from 'src/app/@services/loading.service';
import { LoginService } from 'src/app/@services/login.service';
import { MatSnackBar, MatSnackBarModule, MatSnackBarRef } from '@angular/material/snack-bar';

import { RegisterService } from 'src/app/@services/register.service';
@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  constructor(public login:LoginService,public load:LoadingService,private route:ActivatedRoute,private router:Router,private registerservice:RegisterService) { }
  id:any;
  name:any;
  errorMessage:any;
  invalidvar:any=false;
  ngOnInit(): void {

    this.id=this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.registerservice.confirm(this.id)
  .subscribe({
    next: (res) => {
      console.log(res);
      this.name=res.data.name;
      this.login.logOut();
      setTimeout(() => {
        this.router.navigateByUrl("auth/login");

      }, 5000);

      
     
    }, error: (error) => {
      this.invalidvar=true;
      this.errorMessage=error.message
      console.log(error.message);
    }
    
  })

  }




}
