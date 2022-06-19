import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.css']
})
export class UpdateTodoComponent implements OnInit {

  userId = '';
  todoId = '';
  todoDetails:any;
  formGroup = new FormGroup({
    title: new FormControl(0, Validators.required),
    completed: new FormControl(true, Validators.required)
  });
  


  constructor(private activatedRoute: ActivatedRoute, private todoService: TodosService) {
    this.userId = activatedRoute.snapshot.params['userId'];
    this.todoId = activatedRoute.snapshot.params['todoId'];
  }

  updateTodo() {

    let updatedTodo = {
      userId: this.userId,
      title: this.formGroup.controls['title'].value,
      completed: this.formGroup.controls['completed'].value
    }

    if(this.formGroup.valid) {
      this.todoService.updateTodo(this.todoId, updatedTodo).subscribe(() => {
        window.location.href = 'user-details/' + this.userId;
      });
    }

  }

  ngOnInit(): void {
    this.todoService.getTodoById(this.todoId).subscribe((todo) => {
      this.todoDetails = todo;
      this.formGroup.get('title')?.setValue(this.todoDetails['title']);
      this.formGroup.get('completed')?.setValue(this.todoDetails['completed']);
    });

    

    
  }

}
