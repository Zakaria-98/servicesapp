import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from '../@services/categories.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  keyword:any='';
  category:any;

  constructor(private categories:CategoriesService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    localStorage.removeItem('Token')
    localStorage.removeItem('rule')

    this.categories.allcategories()
    .subscribe({
      next: (res) => {
        console.log(res);
        this.category=res.data;
        
         //this.secondArray=res.data.image.map((value) => "data:image/png;base64,"+ value);
       
       
      }, error: (error) => {
        console.log(error);
      }

      
    })


  }


  register_click(){
    this.router.navigateByUrl("auth/register");

  }

  searchbtn(word:any){
    // this.router.navigateByUrl("/home/search/word/"+word);
     this.router.navigate(['/home/search/word/', word]);
   }
 
}
