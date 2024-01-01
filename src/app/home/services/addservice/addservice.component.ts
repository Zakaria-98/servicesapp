import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/@services/profile.service';
import { DomSanitizer } from '@angular/platform-browser';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from 'src/app/@services/validators.service';
import { ServicesService } from 'src/app/@services/services.service';
import { CitiesService } from 'src/app/@services/cities.service';
import { CategoriesService } from 'src/app/@services/categories.service';
import { ValidationsService } from 'src/app/@services/validations.service';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarModule, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-addservice',
  templateUrl: './addservice.component.html',
  styleUrls: ['./addservice.component.scss']
})
export class AddserviceComponent implements OnInit {
  myimg: any;
  form: FormGroup;
  id: any;
  images = [];
  allcities: any;
  allcategoties: any;
newserviceid:any;

  constructor(private _snackBar: MatSnackBar,private router:Router,private val: ValidationsService, private categories: CategoriesService, private cities: CitiesService, private validation: ValidatorsService, private profile: ProfileService, private service: ServicesService, private _sanitizer: DomSanitizer, private formbuilder: FormBuilder) {

    this.form = this.formbuilder.group({
      ServiceTypeID: new FormControl('', val.ValidateSelectInput),
      Title: new FormControl('', [Validators.required, this.validation.Validatetext]),
      Description: new FormControl('', [Validators.required, this.validation.Validatetext]),
      Price: new FormControl('', [Validators.required]),
      files: new FormControl()


    })

  }

  ngOnInit(): void {

    this.cities.allcities()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.allcities = res.data;


        }, error: (error) => {
          console.log(error);
        }


      })

    this.categories.allcategories()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.allcategoties = res.data;


        }, error: (error) => {
          console.log(error);
        }


      })



  }



  imageSrc: any = "src\assets\img\profileimg.jpg";

  Files = [];

  readURL(event: any) {

    const FileList = event.target.files;

    for(let i = 0; i < FileList.length; i++){
      this.Files.push(FileList[i])
      const file = event.target.files[0];
     // this.form.get('File').setValue(file);
      
      this.imageSrc=file;
      const reader = new FileReader();
       reader.onload = e => this.imageSrc = reader.result;

        reader.readAsDataURL(file);


    }
    console.log(this.Files);


    

    // if (event.target.files && event.target.files[0]) {
    //   var filesAmount = event.target.files.length;
    //   for (let i = 0; i < filesAmount; i++) {
    //     var reader = new FileReader();

    //     reader.onload = (event: any) => {
    //       console.log(event.target.result);
    //       this.images.push(event.target.result);

    //       this.form.patchValue({
    //         files: this.images
    //       });
    //     }
    //     /// this.form.get('files').updateValueAndValidity();


    //     reader.readAsDataURL(event.target.files[i]);
    //   }
    // }

    
      //   if (event.target.files.length > 0) {
      //    const file = event.target.files[0];
      //    this.form.get('files').setValue(file);
         
      //    this.imageSrc=file;
      //    const reader = new FileReader();
      //     reader.onload = e => this.imageSrc = reader.result;
    
      //      reader.readAsDataURL(file);
      //  }

  }


  onSubmit() {
    const formData = new FormData();
    formData.append("ServiceTypeID", this.form.get('ServiceTypeID')?.value);
    formData.append("Title", this.form.get('Title')?.value);
    formData.append("Description", this.form.get('Description')?.value);
    formData.append("Price", this.form.get('Price')?.value);
    this.Files.forEach(v => formData.append("files", v))
    // formData.append("files", this.form.get('files')?.value);
console.log('submit');

    console.log(this.form.get('files')?.value );
    

    /* for (let i = 0; i < this.form.get('files').length; i++) {
       formData.append('files', this.images[i]);
     }*/
    console.log(formData.get('files'));
    if(formData.get('files') ==null) 
{
  console.log("fun")
  console.log(formData.get('Files'));
  
  this.openSnackBarfalse('يرجى اضافة صورة للخدمة ','خطأ')


}
else{
    this.service.addservice(formData)
      .subscribe({
        next: (res) => {

          console.log(res);
          this.openSnackBar('تمت إضافة الخدمة بنجاح','إضافة')
          this.newserviceid=res.data.id;

          this.router.navigateByUrl("home/service/info/"+this.newserviceid);


        }, error: (error) => {
          console.log(error.message);
          this.openSnackBarfalse('   لم تتم إضافة خدمة ','خطأ')

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
