import { Injectable } from '@angular/core';
import { User } from './user';
import { USERS } from './mock-users';
import { catchError, Observable, of, throwError } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private messageService: MessageService, private http: HttpClient) { }

  private usersUrl = 'http://localhost:8080/users';

  getUsers() {
    const users = of(USERS);
    this.messageService.add('UserService: fetched Users');
    // return users;
    console.log(this.http.get<User[]>(this.usersUrl));
    return this.http.get<User[]>(this.usersUrl);
  }

  getUser(name: string): Observable<User> {
    // const user = USERS.find(h => h.id === id)!;
    // this.messageService.add(`UserService: fetched user id = ${id}`);
    return this.http.get<User>(`${this.usersUrl}/salaryByName?name=${name}`);
  }

  getUsersByParam(data: any): Observable<any> {
    return this.http.get<User[]>(`${this.usersUrl}?min=${data.min || 0}&max=${data.max || 4000}&offset=${data.offset || 0}&limit=${data.limit || 99999999}&sort=${data.sort || 'id'}`).pipe(catchError(err => { alert("Please check your input type(s)."); return throwError(err)}))
  }

  // catchError(error: any): any{
  //   console.log(error);
  //   // if (error && error.error && error.error.message){
  //   //   alert(error.error.message);
  //   // } else if (error && error.message){
  //   //   alert(error.message);
  //   // } else{
  //   //   alert(JSON.stringify(error));
  //   // }
  //   return throwError(error);
  // }
}
