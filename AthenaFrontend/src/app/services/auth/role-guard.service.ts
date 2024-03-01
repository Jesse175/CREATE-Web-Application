import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {

  constructor(public auth: AuthService, public router: Router) { }

  public async canActivate(route: ActivatedRouteSnapshot): Promise<boolean> {
    const expectedRole = route.data['expectedRole'];
    const payload = await this.auth.getAuthentication();
    if (
      !this.auth.isAuthenticated() ||
      payload.Role.Name !== expectedRole
    ) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }

}
