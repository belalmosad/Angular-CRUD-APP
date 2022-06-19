import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  allUsers:any = [];
  constructor(private userService: UserService) {
    
  }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((users) => {
      this.allUsers = users;
    });
  }
  getUsers(e:any) {
    e.subscribe((users:any) => {
      this.allUsers = users;
    });
  }

  

}
