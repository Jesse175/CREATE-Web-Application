export class Student {
  public FirstName: string;
  public LastName: string;
  public Availability: any;
  public Email: string;
  public Exp: number;
  public Rank: string;

  constructor(student: any){
    if (student.email != null || student.Email != null){
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
}
