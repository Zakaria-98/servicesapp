import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, Observable } from 'rxjs';
import { LoadingService } from './loading.service';
import { LoginService } from './login.service';
@Injectable({
  providedIn: 'root'
})
export class TokinIntrsiptService {
  public loadingvar:boolean=false;
  constructor(private login :LoginService,private loadingser:LoadingService ) {


   }
   private loadingCounter = 0;

   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loadingser.isLoading.next(true);
   this.loadingCounter++;


    let newRequst = req.clone({
      setHeaders: {
        "Authorization": `Bearer ${this.login.getToken()}`,
       
      },
    });

   
    
    return next.handle(newRequst).pipe(
      finalize(
        ()=>{this.loadingCounter--;
          if (this.loadingCounter === 0) {
            this.loadingser.isLoading.next(false); // Set isLoading to false when no active requests remain
          }
        }
        
      )
    )
    
  }
}
