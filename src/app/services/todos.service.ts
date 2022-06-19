import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  DB_TODOS = 'http://localhost:3000/todos';

  constructor(private httpClient: HttpClient) { }

  getTodosByUserId(userId:any) {
    
    return this.httpClient.get(this.DB_TODOS).pipe(map((todos: any) => {
      return todos.filter((todo: any) => todo.userId == userId)
    }));

  }

  getTodoById(todoId:any) {
    return this.httpClient.get(this.DB_TODOS+'/'+todoId);
  }

  deleteTodoById(todoId:any) {
    return this.httpClient.delete(this.DB_TODOS + '/' +todoId);
  }

  addNewTodo(todoItem:any) {
    return this.httpClient.post(this.DB_TODOS, todoItem);
  }

  updateTodo(todoId: any, todoItem:any) {
    return this.httpClient.put(this.DB_TODOS+'/'+todoId, todoItem);
  }
}
