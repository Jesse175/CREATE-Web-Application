export class Module {
    
    id: number;
    name: string;
    color: string; //Hex? 
    description: string;

    constructor(id: number, name: string, color: string, description: string)
    {
        this.id = id;
        this.name = name;
        this.color = color;
        this.description = description;
    }

    get getId(): number{
        return this.id;
    }
    get getName(): string{
        return this.name;
    }
    get getColor(): string{
        return this.color;
    }
    get getDescription(): string{
        return this.description;
    }

    set setId(id: number){
        this.id = id;
    }
    set setName(name: string){
        this.name = name;
    }
    set setColor(color: string){
        this.color = color;
    }
    set setDescription(description: string){
        this.description = description;
    }
}