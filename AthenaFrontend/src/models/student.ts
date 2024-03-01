//1:1 with Student.cs
export class Student
{
    firstName: string;
    lastName: string;
    availability: string;
    exp: number;

    constructor(firstName: string, lastName: string, availability: string, exp: number)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.availability = availability;
        this.exp = exp;
    }

    get getFirstName(): string {
        return this.firstName;
    }
    get getLastName(): string{
        return this.lastName;
    }
    get getAvailability(): string{
        return this.availability;
    }
    get getExp(): number{
        return this.exp;
    }

    set setFirstName(firstName: string){
        this.firstName = firstName;
    }
    set setLastName(lastName: string){
        this.lastName = lastName;
    }
    set setAvailability(availability: string){
        this.availability = availability;
    }
    set setExp(exp: number){
        this.exp = exp;
    }

    getRank(): string 
    {
        let expSearch: number = this.getExp;
        let title: string = '';

        if(expSearch <= 20)
            title = 'Beginner'
        else if(expSearch > 20 && expSearch <= 50)
            title = 'Amateur'
        else if(expSearch > 50 && expSearch <= 100)
            title = 'Novice'
        else if(expSearch > 100 && expSearch <= 200)
            title = 'Intern';
        else if(expSearch > 200 && expSearch <= 300)
            title = 'Junior Developer';
        else if(expSearch > 300 && expSearch <= 400)
            title = 'Software Developer I'
        else if(expSearch > 400 && expSearch <= 500)
            title = 'Software Developer II'
        else if(expSearch > 500 && expSearch <= 650)
            title = 'Software Developer III'
        else if(expSearch > 650)
            title = 'Principal Developer'
        
        return title;
    }
}

