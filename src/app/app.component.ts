import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NbComponentSize, NbIconConfig, NbMenuItem } from '@nebular/theme';
import { OwlOptions } from 'node_modules/ngx-owl-carousel-o/lib/models/owl-options.model.d';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }


  title = 'services';

  disabledIconConfig: NbIconConfig = { icon: 'settings-2-outline', pack: 'eva' };
  sizes: NbComponentSize[] = [ 'tiny', 'small', 'medium', 'large', 'giant' ];

  items: NbMenuItem[] = [
    {
      title: "تسجيل الخروج",
      link: '/',
    }
   ];


 
   constructor(private _snackBar: MatSnackBar) {}

   

}
