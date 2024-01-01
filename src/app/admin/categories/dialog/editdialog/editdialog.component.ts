import { Component, Inject, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CategoriesService } from 'src/app/@services/categories.service';
import { ValidatorsService } from 'src/app/@services/validators.service';
import { MatSnackBar, MatSnackBarModule, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-editdialog',
  templateUrl: './editdialog.component.html',
  styleUrls: ['./editdialog.component.scss']
})
export class EditdialogComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar,private validation:ValidatorsService ,private categories:CategoriesService
  
  ,private dialogRef: MatDialogRef<EditdialogComponent>,@Inject(MAT_DIALOG_DATA) public data: string) { }
  title:any;
  id:any;
  name:any;
  check:any;
  addcustomer={
    name: '',
    checkRequired:true
    
  }
catname:any;
newcatform=new FormGroup({
  name:new FormControl('', [Validators.required,this.validation.Validatetext]),
  check:new FormControl(false)
})


  ngOnInit(): void {
    this.title=this.data['Title'];
    this.id=this.data['id'];
    this.name=this.data['name'];
    this.check=this.data['check'];

  }

  onSubmit( ){

    this.addcustomer.name=this.newcatform.get('name')?.value;
    this.addcustomer.checkRequired=this.newcatform.get('check')?.value;
    console.log(this.addcustomer.name);
    console.log(this.addcustomer.checkRequired);
    this.categories.editcategory(this.id,this.addcustomer)
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
