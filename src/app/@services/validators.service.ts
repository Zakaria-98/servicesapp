import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  constructor() { }

  Validatepassword(control:AbstractControl): {[key:string]: any} | null{
    if(control.value.toString().length <6 )
   return { 

      SelectError: "يجب أن تتكون كلمة المرور من ستة حروف على الأقل"
    }
    return null;
    
  }

  Validatetext(control:AbstractControl): {[key:string]: any} | null{
    if(control.value.toString().length < 3)
   return { 

      SelectError: " يجب ان يتكون الاسم من ثلاثة حروف على الاقل"
    }
    return null;
    
  }
}
