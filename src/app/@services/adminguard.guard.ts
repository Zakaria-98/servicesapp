import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AdminguardGuard implements CanActivate {
  constructor(
    private router:Router,
    private login:LoginService
  ){}
  canActivate(){
    if(this.login.isadmin()){
      //console.log("guard");

     return true;}
console.log("guard");

    this.login.logOut();

    return false;
  }
  
}
