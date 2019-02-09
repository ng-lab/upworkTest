import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from './containers/user-details/user-details.component';
import { UserDetailsRoutingModule } from './user-details.routing';

@NgModule({
  imports: [

  CommonModule,
    UserDetailsRoutingModule
  ],
  declarations: [UserDetailsComponent]
})
export class UserDetailsModule { }
