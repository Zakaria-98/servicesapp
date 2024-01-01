import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { CategoriesService } from 'src/app/@services/categories.service';
import { CellClickedEvent, ColDef, RowDoubleClickedEvent } from 'ag-grid-community';
import { GeneraldialogComponent } from 'src/app/shared/generaldialog/generaldialog.component';
import {Overlay} from '@angular/cdk/overlay';
import { MatSnackBar, MatSnackBarModule, MatSnackBarRef } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { EditdialogComponent } from './dialog/editdialog/editdialog.component';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  selected_cell_name: any;
  selected_cell_check: any;

  constructor(private router:Router,private _snackBar: MatSnackBar,public dialog: MatDialog,private categories:CategoriesService) { }
  show_delete_btn:any=false;
  show_edit_btn:any=false;
  selected_cell:any;
new_cat_dialog(){
  const dialogRef =this.dialog.open(DialogComponent, {
    
    width:'500px',
    height:'300px',
    data:{
    Title: 'تأكيد العملية',
    Message: 'هل انت متأكد من عملية الحدف؟'}
    
  })
 

  
  
}


edit_cat_dialog(){
  const dialogRef =this.dialog.open(EditdialogComponent, {
    
    width:'500px',
    height:'300px',
    data:{
    Title: "تعديل ",
    id: this.selected_cell,
    name:this.selected_cell_name,
    check:this.selected_cell_check
  
  }
    
  })
 

  
  
}





delete_cat_dialog(){
  const dialogRef =this.dialog.open(GeneraldialogComponent, {
    width:'500px',
    height:'200px', 
       data:{
      Title: 'تأكيد العملية',
      Message: 'هل انت متأكد من عملية الحدف؟'}
  });
  dialogRef.afterClosed().subscribe({
    next: (res) =>{
      console.log("ress"+res);
     if(res==true)
     {
      this.categories.deletecategory(this.selected_cell)
     .subscribe({
       next: (res2) => {
         console.log(res2);
         this.openSnackBar('تمت العملية بنجاح','حذف')
         window.location.reload();

        
       }, error: (error) => {
         console.log(error);
         this.openSnackBarfalse('لم تتم العملية يرجى اعادة المحاولة','حذف')

       }
 
       
     })
     }
     if(res==false)
     console.log("itsss false");

     
    }
  })}




defaultColDef = {

  resizable: true,
  flex: 1,
  sortable: true
};

rowData: any[]=[
]

public colDefs: ColDef[] = [
 
  {
    field: 'id',
    headerName: 'رقم المجال',


  },
 
  {
    field: 'name',
    headerName: ' اسم المجال',


  },];

  ngOnInit(): void {
    this.categories.allcategories()
    .subscribe({
      next: (res) => {
        console.log(res);

       
      }, error: (error) => {
        console.log(error);
      }

      
    })
    this.get_categories();
  }
  
  get_categories(){

    this.categories.allcategories()
    .subscribe({
      next: (res) => {
        console.log(res);
        this.rowData=res.data;

       
      }, error: (error) => {
        console.log(error);
      }

      
    })

  }

  onCellClicked(event:CellClickedEvent){
   console.log(event.data.id)
   this.selected_cell=event.data.id;
   this.selected_cell_name=event.data.name;
   this.show_delete_btn=true;
   this.show_edit_btn=true;
   this.selected_cell_check=event.data.checkRequired;

  }

  onRowDoubleClick(event:RowDoubleClickedEvent){
    console.log(event);
    this.router.navigateByUrl("home/categories/cat/"+event.data.id);

  }

  delete_cat(){
    
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
