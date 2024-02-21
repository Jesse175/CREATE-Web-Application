export class Role {
  public RoleID: string;
  public Name: string;
  public Person: any;

  constructor(role: any){
    if (role.roleID && role.roleID != null){
      this.RoleID = role.roleID;
      this.Name = role.name;
      this.Person = role.person;
    } else {
      this.RoleID = '00000000-0000-0000-0000-000000000000';
      this.Name = '';
      this.Person = null;
    }
  }
}
