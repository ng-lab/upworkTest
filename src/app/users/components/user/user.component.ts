import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() user;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goToDetails(id) {
    this.router.navigate([`user-details/${id}`]);
  }

}
