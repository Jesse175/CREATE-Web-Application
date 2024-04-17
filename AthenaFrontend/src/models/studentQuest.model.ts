export class StudentQuest {
    StudentID: string;
    QuestID: string;
    Completed: boolean;
    LastActivityDate: Date;
  
    constructor(studentQuest: any) {
      this.StudentID = studentQuest.StudentID;
      this.QuestID = studentQuest.QuestID;
      this.Completed = studentQuest.Completed;
      this.LastActivityDate = studentQuest.LastActivityDate;
    }
  }