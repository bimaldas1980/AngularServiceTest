import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {

  constructor(private userService: UserServiceService) { }

  ngOnInit() {
  }

  OnActivateUser(usr) {
    this.userService.moveToActive(usr);
  }

}
