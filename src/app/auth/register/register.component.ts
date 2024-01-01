import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/@services/register.service';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { LoadingService } from 'src/app/@services/loading.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form:FormGroup;
  
  constructor(public load:LoadingService,private _snackBar: MatSnackBar,private router:Router,private registerservice:RegisterService,private formbuilder:FormBuilder) { 
     this.form=new FormGroup({
    //email:new FormControl(''),
    email:new FormControl('',[Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password: new FormControl("", [Validators.pattern('^(?=.*\\d)(?=.*[A-Z]).{6,}$')])

  })
}


  regObject={
  email:'',
  password:''
  
}

openSnackBar(message: string, action: string) {
  this._snackBar.open(message,  action, {
    duration: 5000,
    panelClass: ['mat-toolbar', 'mat-warn']
  });
}


errorMessage:any;
invalidvar:any=false;


  ngOnInit(): void {
    localStorage.removeItem('Token')
    localStorage.removeItem('rule')
  }

  onSubmit(){



  console.log("zz");

  this.registerservice.register(this.form.getRawValue())
  .subscribe({
    next: (res) => {
      console.log(res);
      this.openSnackBar('تم إرسال البريد الالكتروني يرجى التأكيد','تأكيد حسابك')
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

loginbtn(){
  this.router.navigateByUrl("auth/login");

}

}
