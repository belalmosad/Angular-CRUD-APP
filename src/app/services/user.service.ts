import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  DB_USERS = 'http://localhost:3000/users';
  constructor(private httpClient: HttpClient) {}

  getAllUsers() {
    return this.httpClient.get(this.DB_USERS);
  }

  getUserById(id:any) {
    return this.httpClient.get(this.DB_USERS+'/'+id);
  }

  addNewUser(user:any) {
    return this.httpClient.post(this.DB_USERS, user);
  }

  deleteUser(userId: any) {
    return this.httpClient.delete(this.DB_USERS + '/'+ userId);
  }

  updateUser(user:any, userId: any) {
    return this.httpClient.put(this.DB_USERS + '/' + userId, user);
  } 

}
