import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../Services/login.service';

@Injectable({
  providedIn: 'root'
})
export class HeadGuard implements CanActivate {
  
  constructor(private auth : LoginService, private route : Router) {  }
  
  canActivate(){
    if(this.auth.getRole() == "Training Head")
    return true;
    else return false;
  }
  
}
