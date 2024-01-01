import { state } from '@angular/animations';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CategoriesComponent } from 'src/app/admin/categories/categories.component';
import { DialogComponent } from 'src/app/admin/categories/dialog/dialog.component';

@Component({
  selector: 'app-generaldialog',
  templateUrl: './generaldialog.component.html',
  styleUrls: ['./generaldialog.component.scss']
})
export class GeneraldialogComponent implements OnInit {
 // @Input() Title:string = '';
  //@Input() Message:string = '';
title:any;
message:any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: string
  
 ,private dialogRef: MatDialogRef<GeneraldialogComponent>
 //,private dialogRef: MatDialogRef<CategoriesComponent>
  ) { 
    console.log(this.data)
    this.title=this.data['Title'];
    this.message=this.data['Message'];

  }


    
  
  ngOnInit(): void {
    console.log(this.data)
   // this.fun();
  }


 close(State){
    console.log("kkkkk");
    //this.dialogRef.close({ 'you confirmed' });
    this.dialogRef.close(State);
  }


}
