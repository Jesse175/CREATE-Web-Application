//1:1 with Student.cs
export class Student {
  public FirstName: string;
  public LastName: string;
  public Availability: any;
  public Email: string;
  public Exp: number;
  public Rank: string;

  constructor(student: any) {
    if (student.email != null || student.Email != null) {
      this.FirstName = student.firstName || student.FirstName;
      this.LastName = student.lastName || student.LastName;
      this.Availability = student.availability || student.Availability;
      this.Email = student.email || student.Email;
      this.Exp = student.exp || student.Exp;
      this.Rank = student.rank || student.Rank;
    } else {
      this.FirstName = '';
      this.LastName = '';
      this.Availability = '';
      this.Email = '';
      this.Exp = 0;
      this.Rank = '';
    }
  }

  public getRank(): string {
    let expSearch: number = this.Exp;
    let title: string = '';

    if (expSearch <= 20) title = 'Beginner';
    else if (expSearch > 20 && expSearch <= 50) title = 'Amateur';
    else if (expSearch > 50 && expSearch <= 100) title = 'Novice';
    else if (expSearch > 100 && expSearch <= 200) title = 'Intern';
    else if (expSearch > 200 && expSearch <= 300) title = 'Junior Developer';
    else if (expSearch > 300 && expSearch <= 400)
      title = 'Software Developer I';
    else if (expSearch > 400 && expSearch <= 500)
      title = 'Software Developer II';
    else if (expSearch > 500 && expSearch <= 650)
      title = 'Software Developer III';
    else if (expSearch > 650) title = 'Principal Developer';

    return title;
  }
}

