import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  userId = '';

  formGroup = new FormGroup({
    title: new FormControl(null, Validators.required),
    completed: new FormControl(null, Validators.required)
  });

  constructor(private todoService: TodosService, private activatedRoute: ActivatedRoute) { 
    this.userId = activatedRoute.snapshot.params['id'];
  }

  addNewTodo() {
    let newTodo = {
      userId: this.userId,
      title: this.formGroup.controls['title'].value,
      completed: this.formGroup.controls['completed'].value
    }

    if(this.formGroup.valid) {
      this.todoService.addNewTodo(newTodo).subscribe(() => {
        location.href = 'user-details/'+this.userId
      });
    }
  }

  ngOnInit(): void {

  }

}
