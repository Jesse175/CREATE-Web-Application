import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BreadcrumbService } from 'src/app/services/breadcrumb.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent {
  public prevPages: any[] = [];
  @Input() currentPage: any;

constructor(public breadcrumb: BreadcrumbService, public router: Router){
  
  breadcrumb.addPage(breadcrumb.getCurrentPage(this.currentPage));
  this.prevPages = breadcrumb.getPrevPages();
}

}
