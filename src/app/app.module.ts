import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { UpdateTodoComponent } from './components/update-todo/update-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserDetailsComponent,
    UserCardComponent,
    AddUserComponent,
    AllUsersComponent,
    UpdateUserComponent,
    AddTodoComponent,
    UpdateTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
