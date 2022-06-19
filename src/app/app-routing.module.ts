import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { UpdateTodoComponent } from './components/update-todo/update-todo.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

const routes: Routes = [
  {path: '', component: AllUsersComponent},
  {path: 'users', component: AllUsersComponent},
  {path: 'add-user', component: AddUserComponent},
  {path: 'user-details/:id', component: UserDetailsComponent},
  {path: 'update-user/:id', component: UpdateUserComponent},
  {path: 'user/:id/add-todo', component: AddTodoComponent},
  {path: 'user/:userId/update-todo/:todoId', component: UpdateTodoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
