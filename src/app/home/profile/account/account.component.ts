import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/@services/profile.service';
import { DomSanitizer } from '@angular/platform-browser';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from 'src/app/@services/validators.service';
import { CitiesService } from 'src/app/@services/cities.service';
import { MatSnackBar, MatSnackBarModule, MatSnackBarRef } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  myimg:any;
  form:FormGroup;
  files: any[];
  fileupload:any;  
  allcities:any;
  constructor(private router:Router,private _snackBar: MatSnackBar,private cities:CitiesService,private profile:ProfileService,private _sanitizer: DomSanitizer,private formbuilder:FormBuilder) { 


  this.form=this.formbuilder.group({
    Name: [''],
    PhoneNumber: ['',[Validators.pattern("^(092|091|095|094)[0-9]{7}$")]],
    Abstract: [''],
    CityID: [''],
    File: [''],
    

  })
  
  
  }

  
  ngOnInit(): void {
    this.cities.allcities()
    .subscribe({
      next: (res) => {
        console.log(res);
        this.allcities=res.data;

       
      }, error: (error) => {
        console.log(error);
      }

      
    })


    this.profile.getaccountbyid(localStorage.getItem("id"))
    .subscribe({
      next: (res) => {
       console.log(res);
       this.id=res.data.id;
        this.form.get("Name")?.setValue(res.data.name);
        this.form.get("PhoneNumber")?.setValue(res.data.phoneNumber);
        this.form.get("CityID")?.setValue(res.data.cityID);
        this.form.get("Abstract")?.setValue(res.data.abstract);
        // this.myimg=res.data.profileImage;
        //this.form.get("File")?.setValue(res.data.profileImage);
        if(res.data.profileImage!='')
        this.imageSrc="data:image/png;base64,"+res.data.profileImage;
      
       this.id=res.data.id;
       this.registerDate=res.data.registerDate; 


       
        

        
      
      }, error: (error) => {
        console.log("errrrrorrr"+ error.message);
      }

      
    })


  }
  imageSrc:any="../../assets/img/userimg2.png";

  images: { base64: string }[] = [];
  image64:any;
  id:any;
  registerDate:any;
file:any=null;
  readURL(event:any){

     if (event.target.files.length > 0) {
       this.file = event.target.files[0];
      this.form.get('File').setValue(this.file);
      
      this.imageSrc=this.file;
      const reader = new FileReader();
       reader.onload = e => this.imageSrc = reader.result;

        reader.readAsDataURL(this.file);
    }
    
  }
 
  onSubmit(){
    
    const formData =new FormData();
    formData.append("Name",this.form.get('Name')?.value);
    formData.append("PhoneNumber",this.form.get('PhoneNumber')?.value);
    formData.append("Abstract",this.form.get('Abstract')?.value);
    formData.append("CityID",this.form.get('CityID')?.value);
   formData.append("File",this.form.get('File').value);

 



if(this.file==null)
{
  this.openSnackBarfalse('لم يتم تحديث الملف الشخصي ','تحديث')
  
}

else{

    this.profile.postaccount(this.id,formData)
    .subscribe({
      next: (res) => {
        this.openSnackBar('تم تحديث الملف الشخصي بنجاح','تحديث')
        this.router.navigateByUrl("home/profile/user/"+this.id);

     console.log(res);
     
     
      
      }, error: (error) => {
        this.openSnackBarfalse('لم يتم تحديث الملف الشخصي ','تحديث')

        console.log( error.message);
      }

      
    })
  }}
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
