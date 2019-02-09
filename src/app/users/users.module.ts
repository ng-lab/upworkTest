import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as fromContainers from './containers';
import * as fromComponents from './components';
import { UsersRoutingModule } from './users.routing';

const containers = [fromContainers.UserListComponent];
const components = [fromComponents.UserComponent];

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  declarations: [...containers, ...components]
})
export class UsersModule { }
