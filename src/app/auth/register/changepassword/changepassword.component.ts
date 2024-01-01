import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { LoadingService } from 'src/app/@services/loading.service';
import { LoginService } from 'src/app/@services/login.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss']
})
export class ChangepasswordComponent implements OnInit {
  password:any;
  form:FormGroup;
id:any;
  constructor(private route:ActivatedRoute,private router:Router,public load:LoadingService,private login:LoginService) {   this.form=new FormGroup({
    //email:new FormControl(''),
    password: new FormControl("", [Validators.pattern('^(?=.*\\d)(?=.*[A-Z]).{6,}$')])

  })

}
  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id');

  }

  onSubmit(){

    this.login.changepassword(this.id,this.password)
    .subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigateByUrl("auth/login");

      }, error: (error) => {

      }

      
    })


    
  }


}
