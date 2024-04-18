import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  private prevPages: any[];
  private currentPage: any = new Breadcrumb('', '/dashboard', '');

  constructor(public router: Router) {
    this.prevPages = [];
  }

  //Returns the breadcrumb object of the currently set page
  public getCurrentPage(){
    return this.currentPage;
  }
  public makeCurrentPage(name: string, url: string, state: any){
    this.currentPage = new Breadcrumb(name, url, state);
  }

  //Returns the array of pages visited
  public getPrevPages(){return this.prevPages;}

  public setPrevPages(){
    if (this.currentPage.name.toLowerCase() == "dashboard" || this.currentPage.name.toLowerCase() == "students" || this.currentPage.name.toLowerCase() == "modules" || this.currentPage.name.toLowerCase() == "settings"){
      this.prevPages = [];
    }
    for (let i = 0; i < this.prevPages.length; i++){
      if (this.currentPage.name.toLowerCase() == this.prevPages[i].name.toLowerCase()){
        this.prevPages.pop();
        return;
      }
    }
    this.addPage(this.getCurrentPage());
  }

  public addPage(page: Breadcrumb) {this.prevPages.push(page);}

}


export class Breadcrumb {
  constructor(public name: string, public url: string, public state: any){}
  public getName(){return this.name;}
  public getURL(){return this.url;}
  public getState(){return this.state;}
}
