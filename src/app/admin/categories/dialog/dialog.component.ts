import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoriesService } from 'src/app/@services/categories.service';
import { ValidatorsService } from 'src/app/@services/validators.service';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar,private validation:ValidatorsService ,private categories:CategoriesService) { }
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
  }



  onSubmit( ){

    this.addcustomer.name=this.newcatform.get('name')?.value;
    this.addcustomer.checkRequired=this.newcatform.get('check')?.value;
    console.log(this.addcustomer.name);
    console.log(this.addcustomer.checkRequired);
    this.categories.addcategory(this.addcustomer)
    .subscribe({
      next: (res) => {
        console.log(res);
        this.openSnackBar('تمت العملية بنجاح','اضافة')
        window.location.reload();

       
      }, error: (error) => {
        console.log(error);
        this.openSnackBarfalse('لم تتم العملية يرجى اعادة المحاولة','اضافة')

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
