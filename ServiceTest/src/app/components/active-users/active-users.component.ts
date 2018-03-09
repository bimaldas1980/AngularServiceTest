import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {

  constructor(private userService: UserServiceService) { 

  }

  OnInactiveteUser(usr) {
    this.userService.moveToInactive(usr);
  }

  ngOnInit() {

  }

}
