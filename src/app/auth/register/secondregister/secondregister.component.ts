import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'node_modules/ngx-owl-carousel-o/lib/models/owl-options.model.d';
import { LoadingService } from 'src/app/@services/loading.service';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/@services/login.service';

@Component({
  selector: 'app-secondregister',
  templateUrl: './secondregister.component.html',
  styleUrls: ['./secondregister.component.scss']
})
export class SecondregisterComponent implements OnInit {
  email:any;
  form:FormGroup;

  constructor(public load:LoadingService,private login:LoginService) {   this.form=new FormGroup({
    //email:new FormControl(''),
    email:new FormControl('',[Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),

  })

}

  ngOnInit(): void {

  }

  onSubmit(){

    this.login.forgetpassword(this.email)
    .subscribe({
      next: (res) => {
        console.log(res);
      }, error: (error) => {

      }

      
    })

  }
}




