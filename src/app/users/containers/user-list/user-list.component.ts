import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../users.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users$: Observable<any>;

  constructor(
    private UsersService: UsersService
  ) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
this.users$ = this.UsersService.getUsers();
  }

}
