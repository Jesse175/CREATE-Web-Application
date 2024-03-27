import { Injectable } from '@angular/core';
import {environment} from 'src/environment/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestcontrolllerService {

  private apiUrl: any;
  private postHeaders: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient){
    this.apiUrl = environment.apiUrl;
  }

  public AddQuest(Quest: any): Promise<any> {
    return new Promise(resolve => {
      this.http.post(this.apiUrl + '/Quests', JSON.stringify(Quest), {headers: this.postHeaders}).subscribe((data: any) =>
      {resolve(data);}, error => {
        resolve(false);
      });
    });
  }
    
  public GetAllQuests(): Promise<any> {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/Quests').subscribe((data: any) => {
        resolve(data);
      }, error => {
        resolve(false);
      });
    });
  }

  public GetQuestById(QuestId: number): Promise<any> {
    return new Promise(resolve => {
      this.http.get('${this.apiUrl}/Quests/${QuestId}').subscribe((data: any) => {
        resolve(data);
      }, error => {
        resolve(false);
      });
    });
  }

  public PutQuest(QuestId: number, updatedQuest: any): Promise<any> {
    return new Promise(resolve => {
      this.http.put('${this.apiUrl}/Quests/${QuestId]', JSON.stringify(updatedQuest), {headers: this.postHeaders}).subscribe((data: any) => {
      resolve(data);
    }, error => {
      resolve(false);
    });
    });
  }

  public DeleteQuest(QuestId: number): Promise<any> {
    return new Promise(resolve => {
      this.http.delete('${this.apiUrl}/Quests/${QuestId}').subscribe((data: any) => {
        resolve(data);
      }, error => {
        resolve(false);
      });
    });
  }
}
