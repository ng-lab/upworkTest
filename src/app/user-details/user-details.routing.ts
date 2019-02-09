

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './containers/user-details/user-details.component';
import { UserDetailResolver } from './user-details.resolver';

const routes: Routes = [
  {
    path: '',
    component: UserDetailsComponent,
    resolve: {
  data: UserDetailResolver
},
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class UserDetailsRoutingModule {}
