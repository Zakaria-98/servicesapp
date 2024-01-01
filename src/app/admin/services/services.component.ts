import { Component, OnInit } from '@angular/core';
import { CellClickedEvent, ColDef, RowDoubleClickedEvent } from 'ag-grid-community';
import { ServicesService } from 'src/app/@services/services.service';
import { MatSnackBar, MatSnackBarModule, MatSnackBarRef } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { GeneraldialogComponent } from 'src/app/shared/generaldialog/generaldialog.component';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { UsersService } from 'src/app/@services/users.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  selected_cell_name: any;
  show_verify_btn:any=false;
  show_delete_btn:any=false;
  show_edit_btn:any=true;
  selected_cell:any;
searchword:any;
  constructor(private users:UsersService,private _snackBar: MatSnackBar,public dialog: MatDialog,private router:Router,private services:ServicesService) { }

  defaultColDef = {

    resizable: true,
    flex: 1,
    sortable: true
  };

  rowData: any[]=[
   
  ]

  public colDefs: ColDef[] = [
    {
      field: 'isVerificated',
      headerName: 'التوثيق',


    }
  ,
    {
      field: 'id',
      headerName: 'رقم الخدمة',


    },
    
    {
      field: 'title',
      headerName: 'عنوان الخدمة',


    }





  
  ];


     
 
      
   




  ngOnInit(): void {
   

    this.services.searchservices('','','','',0,'',1,1000)
    .subscribe({
      next: (res) => {
        console.log(res);
        this.rowData=res.data.results;
        
      
       
      }, error: (error) => {
        console.log(error);
      }

      
    })

 

  }

  verify_service(){
    this.services.verifyservice(this.selected_cell)
    .subscribe({
      next: (res) => {
        console.log(res);
        this.openSnackBar('تمت العملية بنجاح','توثيق')
        window.location.reload();

       
      }, error: (error) => {
        console.log(error);
      }

      
    })

  }

  search_fun(){

    this.services.searchservices('','','','',0,this.searchword,1,1000)
    .subscribe({
      next: (res) => {
        console.log(res);
        this.rowData=res.data.results;
        
      
       
      }, error: (error) => {
        console.log(error);
      }

      
    })

 


  }

  delete_service_dialog(){
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
        this.services.deleteservice(this.selected_cell)
       .subscribe({
         next: (res2) => {
           console.log(res2);
           this.openSnackBar('تمت العملية بنجاح','حذف')
           window.location.reload();
  
          
         }, error: (error) => {
          this.openSnackBarfalse('لم تتم العملية يرجى اعادة المحاولة','حذف')

           console.log(error);
         }
   
         
       })
       }
       if(res==false)
       console.log("itsss false");
  
       
      }
    })}
  

  onCellClicked(event:CellClickedEvent){
    this.selected_cell=event.data.id;
    this.selected_cell_name=event.data.name;
    this.show_delete_btn=true;
    this.show_verify_btn=true;
    this.show_edit_btn=true;
  }

  onRowDoubleClick(event:RowDoubleClickedEvent){
    console.log(event);
    this.router.navigateByUrl("home/service/info/"+event.data.id);
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
