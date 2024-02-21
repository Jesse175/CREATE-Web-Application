import { Role } from "./role.model";

export class AuthToken {
  public TokenID: string;
  public Role: Role;
  public Expires: Date;

  constructor(token: any){
    if (token.tokenID && token.tokenID != null){
      this.TokenID = token.tokenID;
      this.Role = token.role;
      this.Expires = token.expires;
    } else {
      this.TokenID = '00000000-0000-0000-0000-000000000000';
      this.Role = new Role(null);
      this.Expires = new Date();
    }
  }
}
