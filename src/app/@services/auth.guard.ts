import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router:Router,
    private login:LoginService
  ){}
  canActivate(){
    if(this.login.isLogin()) return true;

    this.login.logOut();
    return false;
  }


  
}
