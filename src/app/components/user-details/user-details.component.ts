import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs';
import { TodosService } from 'src/app/services/todos.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userId = '';
  userData:any;
  userTodos:any ;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService, private todosService: TodosService) {
    this.userId = activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.userService.getUserById(this.userId).subscribe((user) => {
      this.userData = user;
    });

    this.todosService.getTodosByUserId(this.userId).subscribe((todos) => {
      this.userTodos = todos;
    });

    


  }

  deleteTodo(todoId:any) {
    this.todosService.deleteTodoById(todoId).subscribe(() => {
      this.todosService.getTodosByUserId(this.userId).subscribe((todos) => {
        this.userTodos = todos;
      });
    });
  }


}
