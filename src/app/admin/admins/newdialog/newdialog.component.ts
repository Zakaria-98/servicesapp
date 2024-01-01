import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminsService } from 'src/app/@services/admins.service';
import { ValidatorsService } from 'src/app/@services/validators.service';
import { MatSnackBar, MatSnackBarModule, MatSnackBarRef } from '@angular/material/snack-bar';


@Component({
  selector: 'app-newdialog',
  templateUrl: './newdialog.component.html',
  styleUrls: ['./newdialog.component.scss']
})
export class NewdialogComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar,private validation:ValidatorsService ,private admins:AdminsService) { 
 
  }
  addadmin={
    email: '',
    password:''
  }

  newadminform=new FormGroup({
    email:new FormControl('', [Validators.required,this.validation.Validatetext]),
    password:new FormControl('', [Validators.required]),
  })
  



  ngOnInit(): void {
  }


  onSubmit( ){

    this.addadmin.email=this.newadminform.get('email')?.value;
    this.addadmin.password=this.newadminform.get('password')?.value;
    console.log(this.addadmin.email);
    this.admins.addadmin(this.addadmin)
    .subscribe({
      next: (res) => {
        console.log(res);
        this.openSnackBar('تمت العملية بنجاح','إضافة')
        window.location.reload();

       
      }, error: (error) => {
        this.openSnackBar('لم تتم العملية يرجى اعادة المحاولة','إضافة')

        console.log(error);
      }

      
    })
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


}
