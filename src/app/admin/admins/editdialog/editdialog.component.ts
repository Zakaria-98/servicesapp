import { Component, Inject, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AdminsService } from 'src/app/@services/admins.service';
import { CitiesService } from 'src/app/@services/cities.service';
import { ValidatorsService } from 'src/app/@services/validators.service';
import { MatSnackBar, MatSnackBarModule, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-editdialog',
  templateUrl: './editdialog.component.html',
  styleUrls: ['./editdialog.component.scss']
})
export class EditdialogComponent implements OnInit {


  constructor(private _snackBar: MatSnackBar, private validation:ValidatorsService ,private admins:AdminsService
    ,private dialogRef: MatDialogRef<EditdialogComponent>,@Inject(MAT_DIALOG_DATA) public data: string) { }
    title:any;
    id:any;
    name:any;
    password:any;
    addadmin={
      email: '',
      password:''
      
    }

  newadminform=new FormGroup({
    email:new FormControl('', [Validators.required,this.validation.Validatetext]),
    password:new FormControl('', [Validators.required])
  })
  

  ngOnInit(): void {
    this.title=this.data['Title'];
    this.id=this.data['id'];
    this.name=this.data['name'];
    this.password=this.data['password'];


  }

  
  onSubmit( ){

    this.addadmin.email=this.newadminform.get('email')?.value;
    this.addadmin.password=this.newadminform.get('password')?.value;
    //console.log(this.addadmin.name);
    this.admins.editadmin(this.id,this.addadmin)
    .subscribe({
      next: (res) => {
        console.log(res);
        this.openSnackBar('تمت العملية بنجاح','تعديل')
        window.location.reload();

       
      }, error: (error) => {
        console.log(error);
        this.openSnackBarfalse('لم تتم العملية يرجى اعادة المحاولة','تعديل')

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
