import { Component } from '@angular/core';
import { BreadcrumbService } from 'src/app/services/breadcrumb.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {

  constructor(public breadcrumb: BreadcrumbService){}

  //const pageName: String = 'Settings'
  //breadcrumb.setPrevPages(pageName);
  //const prevPages: any[] = breadcrumb.getPrevPages();
  //const currentPage: any = breadcrumb.getCurrentPage(pageName);
}
