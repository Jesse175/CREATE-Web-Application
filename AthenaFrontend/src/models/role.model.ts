export class Role {
  public RoleID: string;
  public Name: string;
  public Person: any;

  constructor(role: any){
    if (role.roleID && role.roleID != null){
      this.RoleID = role.roleID || role.RoleID;
      this.Name = role.name || role.Name;
      this.Person = role.person || role.Person;
    } else {
      this.RoleID = '00000000-0000-0000-0000-000000000000';
      this.Name = '';
      this.Person = null;
    }
  }
}
