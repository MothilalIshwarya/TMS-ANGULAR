import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../Services/login.service';

@Injectable({
  providedIn: 'root'
})
export class CoOrdinatorGuard implements CanActivate {

  constructor(private auth: LoginService, private route: Router) { }

  canActivate() {
    if (this.auth.getRole() == "Co Ordinator")
      return true;
    else return false;
  }
}
