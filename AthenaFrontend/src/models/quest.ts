export class Quest {

    QuestID: string;
    ModuleID: string;
    Name: string;
    Description: string;
    ExpGain: any;

    constructor(quest: any)
    {
      if (quest.QuestID || quest.questID){
        this.QuestID = quest.QuestID || quest.questID;
        this.ModuleID = quest.moduleID || quest.ModuleID;
        this.Name = quest.name || quest.Name;
        this.Description = quest.description || quest.Description;
        this.ExpGain = quest.expGain || quest.ExpGain;
      } else {
        this.QuestID = '00000000-0000-0000-0000-000000000000';
        this.ModuleID = '00000000-0000-0000-0000-000000000000';
        this.Name = '';
        this.Description = '';
        this.ExpGain = '';
      }
    }
}
