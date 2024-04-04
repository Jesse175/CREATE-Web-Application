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

/*     constructor(id: number, name: string, description: string, expGained: number)
    {
        this.id = id;
        this.name = name;
        this.description = description;
        this.expGained = expGained;
    } */

/*     get getId(): number{
        return this.id;
    }
    get getName(): string{
        return this.name;
    }
    get getDescription(): string{
        return this.description;
    }
    get getExpGained(): number{
        return this.expGained;
    }

    set setId(id: number){
        this.id = id;
    }
    set setName(name: string){
        this.name = name;
    }
    set setDescription(description: string){
        this.description = description;
    }
    set setExpGained(expGained: number){
        this.expGained = expGained;
    } */
}