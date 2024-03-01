export class admin {
    id: number;
    fName: string;
    lName: string;
    email: string;
    password: string;

    constructor(id: number, fName: string,
         lName: string, email: string, password: string){
            this.id = id;
            this.fName = fName;
            this.lName = lName;
            this.email = email;
            this.password = password;
    }

    get getId(): number{
        return this.id;
    }
    get getFName(): string{
        return this.fName;
    }
    get getLName(): string{
        return this.lName;
    }
    get getEmail(): string{
        return this.email;
    }
    get getPassword(): string{
        return this.password;
    }

    set setId(id: number){
        this.id = id;
    }
    set setFName(fName: string){
        this.fName = fName;
    }
    set setLName(lName: string){
        this.lName = lName;
    }
    set setEmail(email: string){
        this.email = email;
    }
    set setPassword(password: string){
        this.password = password;
    }
}