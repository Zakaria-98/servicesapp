import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { CellClickedEvent, ColDef, RowDoubleClickedEvent } from 'ag-grid-community';
import { GeneraldialogComponent } from 'src/app/shared/generaldialog/generaldialog.component';
import {Overlay} from '@angular/cdk/overlay';
import { AdminsService } from 'src/app/@services/admins.service';
import { MatSnackBar, MatSnackBarModule, MatSnackBarRef } from '@angular/material/snack-bar';
import { UsersService } from 'src/app/@services/users.service';
import { ServicesService } from 'src/app/@services/services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  selected_cell_name: any;
  selected_cell_check: any;
  show_delete_btn:any=false;
  show_edit_btn:any=false;
  selected_cell:any;
  search_user:any;

  constructor(private router:Router,private users:UsersService,private _snackBar: MatSnackBar,public dialog: MatDialog,private admins:AdminsService,private services:ServicesService) { }
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
      headerName: 'رقم الخدمة',


    },
    
    {
      field: 'email',
      headerName: 'عنوان الخدمة',


    } ];

  
    delete_user_dialog(){
      const dialogRef =this.dialog.open(GeneraldialogComponent, {
        width:'500px',
        height:'250px', 
           data:{
          Title: 'تأكيد العملية',
          Message: 'هل انت متأكد من عملية الحدف؟'}
      });
      dialogRef.afterClosed().subscribe({
        next: (res) =>{
          console.log("ress"+res);
         if(res==true)
         {
          this.admins.deleteadmin(this.selected_cell)
         .subscribe({
           next: (res2) => {
             console.log(res2);
             this.openSnackBar('تمت العملية بنجاح','حذف')
             window.location.reload();
  
             
  
            
           }, error: (error) => {
             console.log(error);
             this.openSnackBarfalse('عذرا لم تتم العملية يرجى إعادة المحاولة','حذف')
  
           }
     
           
         })
         }
         if(res==false)
         console.log("itsss false");
    
         
        }
      })}
    
  
  

      search_fun(){

        this.users.searchuser(this.search_user)
        .subscribe({
          next: (res) => {
            console.log(res);
            this.rowData=[res.data];
            
          
           
          }, error: (error) => {
            console.log(error);
          }
    
          
        })
    
     
    
    
      }


  
    
 
      
   


  ngOnInit(): void {


  }

  



  onCellClicked(event:CellClickedEvent){
    this.selected_cell=event.data.id;
    this.selected_cell_name=event.data.name;
    this.show_delete_btn=true;
    this.show_edit_btn=true;
    
  }

  onRowDoubleClick(event:RowDoubleClickedEvent){
    console.log(event)
    this.router.navigateByUrl("home/profile/user"+event.data.id);

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