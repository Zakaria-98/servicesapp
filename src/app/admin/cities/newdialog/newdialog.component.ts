import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CitiesService } from 'src/app/@services/cities.service';
import { ValidatorsService } from 'src/app/@services/validators.service';
import { MatSnackBar, MatSnackBarModule, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-newdialog',
  templateUrl: './newdialog.component.html',
  styleUrls: ['./newdialog.component.scss']
})
export class NewdialogComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar, private validation:ValidatorsService ,private cities:CitiesService) { }
  addcity={
    name: ''
  }

  
newcityform=new FormGroup({
  name:new FormControl('', [Validators.required,this.validation.Validatetext]),
})

  ngOnInit(): void {
  }

  onSubmit( ){

    this.addcity.name=this.newcityform.get('name')?.value;
    console.log(this.addcity.name);
    this.cities.addcity(this.addcity)
    .subscribe({
      next: (res) => {
        console.log(res);
        this.openSnackBar('تمت العملية بنجاح','اضافة')
        window.location.reload();

       
      }, error: (error) => {
        this.openSnackBarfalse('لم تتم العملية يرجى اعادة المحاولة','اضافة')

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
