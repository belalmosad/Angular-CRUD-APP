import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() userData:any;

  constructor(private userService: UserService) { 
    
  }

  @Output() sendUsersAfterDelete = new EventEmitter();

  deleteUser(userId: any) {
    if(confirm('Are you sure?')) {
      this.userService.deleteUser(userId).subscribe(() => {
        this.sendUsersAfterDelete.emit(this.userService.getAllUsers());
      });
    }
    
  }

  ngOnInit(): void {
  }

}
