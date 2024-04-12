import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {  
  private prevPages: any[];

  constructor(public router: Router) { 
    this.prevPages = [];
  }

  //Returns a breadcrumb object made of the title of the pgae and 
  public getCurrentPage(title: String){
    return new Breadcrumb(title, this.router.url);
  }

  //Returns the array of pages visited
  public getPrevPages(){return this.prevPages;}
  
  public setPrevPages(title: String){
    if(title.toLowerCase() == "dashboard" || title.toLowerCase() == "students" || title.toLowerCase() == "modules" || title.toLowerCase() == "settings"){
      this.prevPages = [];
    }
    this.addPage(this.getCurrentPage(title));
  }

  public addPage(page: Breadcrumb){this.prevPages.push(page);}
}


class Breadcrumb{
  constructor(public name: String, public url:String){}
}