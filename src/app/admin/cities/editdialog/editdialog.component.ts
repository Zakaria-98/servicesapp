import { Component, Inject, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CitiesService } from 'src/app/@services/cities.service';
import { ValidatorsService } from 'src/app/@services/validators.service';
import { MatSnackBar, MatSnackBarModule, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-editdialog',
  templateUrl: './editdialog.component.html',
  styleUrls: ['./editdialog.component.scss']
})
export class EditdialogComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar, private validation:ValidatorsService ,private cities:CitiesService
    ,private dialogRef: MatDialogRef<EditdialogComponent>,@Inject(MAT_DIALOG_DATA) public data: string) { }


    title:any;
    id:any;
    name:any;
    addcity={
      name: '',
      
    }

  newcityform=new FormGroup({
    name:new FormControl('', [Validators.required,this.validation.Validatetext])
  })

  ngOnInit(): void {
    this.title=this.data['Title'];
    this.id=this.data['id'];
    this.name=this.data['name'];
  }

  onSubmit( ){

    this.addcity.name=this.newcityform.get('name')?.value;
    
    console.log(this.addcity.name);
    this.cities.editcity(this.id,this.addcity)
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
