import { Injectable, EventEmitter } from '@angular/core';


@Injectable()
export class UserServiceService {

  activeUsers = ['Chuck Norris', 'Arnold', 'Bruce Lee', 'Tom Hanks', 'Tom Cruise'];
  inactiveUsers = ['Bradly Cooper', 'Harrison Ford', 'Jason Stanthom'];
  activeInactiveCount: number = 0;

  actorStatusChanged = new EventEmitter<number>();

  constructor() { 

  }

  moveToActive(actorName) {
    this.inactiveUsers = this.inactiveUsers.filter(f => {
      return f != actorName;
    }); 
    this.activeUsers.push(actorName);
    this.activeInactiveCount = this.activeInactiveCount + 1;
    
    this.actorStatusChanged.emit(this.activeInactiveCount);
  }

  moveToInactive(actorName) {
    this.activeUsers = this.activeUsers.filter(f => {
      return f != actorName;
    }); 
    this.inactiveUsers.push(actorName);
    this.activeInactiveCount = this.activeInactiveCount + 1;
   
    this.actorStatusChanged.emit(this.activeInactiveCount);
  }

}
