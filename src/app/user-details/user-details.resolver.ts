import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { UserDetailsService } from './user-details.service';

@Injectable({
  providedIn: 'root'
})
export class UserDetailResolver implements Resolve<any> {
  constructor(private UserDetailsService: UserDetailsService) {}


  resolve(route: ActivatedRouteSnapshot) {
   let id = route.params['id'];
    return this.UserDetailsService.getUserDetails(id);
  }
}
