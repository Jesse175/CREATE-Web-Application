import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { StudentQuest } from 'src/models/studentQuest.model';

@Injectable({
  providedIn: 'root'
})
export class QuestService {
  private apiUrl: any;
  private postHeaders: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) { this.apiUrl = environment.apiUrl; }

  public AddQuest(quest: any): Promise<any> {
    return new Promise(resolve => {
      this.http.post(this.apiUrl + '/Quests', JSON.stringify(quest), { headers: this.postHeaders }).subscribe((data: any) => {
        resolve(data);
      }, error => {
        resolve(false);
      })
    })
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

  public UpdateQuestCompletion(studentQuest : StudentQuest){
    return new Promise(resolve => {
      this.http.post(this.apiUrl + '/Students/UpdateStudentQuest', JSON.stringify(studentQuest), { headers: this.postHeaders }).subscribe((data: any) => {
        resolve(data);
      }, error => {
        resolve(false);
      })
    })
  }

  public GetStudentQuestCompletion(studentId: string): Promise<any> {
    return new Promise(resolve => {
      this.http.get(`${this.apiUrl}/Students/GetStudentQuests/${studentId}`).subscribe((data: any) => {
        resolve(data);
      }, error => {
        console.error('Failed to fetch student quests', error);
        resolve(false);
      });
    });
  }

  public GetQuestById(QuestId: number): Promise<any> {
    return new Promise(resolve => {
      this.http.get(`${this.apiUrl}/Quests/${QuestId}`).subscribe((data: any) => {
        resolve(data);
      }, error => {
        resolve(false);
      });
    });
  }

  public SaveQuest(updatedQuest: any): Promise<any> {
    return new Promise(resolve => {
      this.http.post(this.apiUrl + '/Quests/SaveQuest', JSON.stringify(updatedQuest), {headers: this.postHeaders}).subscribe((data: any) => {
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
