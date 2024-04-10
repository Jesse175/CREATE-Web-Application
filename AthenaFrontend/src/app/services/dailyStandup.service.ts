import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DailyStandupService {
  private apiUrl: any;
  private postHeaders: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

  public GetAllDailyStandups(): Promise<any> {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/DailyStandups').subscribe((data: any) => {
        resolve(data);
      }, error => {
        resolve(false);
      });
    });
  }
}
