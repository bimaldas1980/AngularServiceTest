import { Component } from '@angular/core';
import { UserServiceService } from './services/user-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UserServiceService]
})
export class AppComponent {
  title = 'Service Test';
  totalChangeCount: number = 0;
  constructor(private userService: UserServiceService) {
    this.userService.actorStatusChanged.subscribe((totalCount:number) => {
      this.totalChangeCount = totalCount;
    });
  }

}
