import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class QuestService {
  private apiUrl: any;
  private postHeaders: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) { this.apiUrl = environment.apiUrl; }

  public AddQuest(quest: any): Promise<any> {
    return new Promise(resolve => {
      this.http.post(this.apiUrl + )
    })
  }
}
