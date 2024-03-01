export class Quest {

    id: number;
    name: string;
    description: string;
    expGained: number;

    constructor(id: number, name: string, description: string, expGained: number)
    {
        this.id = id;
        this.name = name;
        this.description = description;
        this.expGained = expGained;
    }

    get getId(): number{
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
    }
}