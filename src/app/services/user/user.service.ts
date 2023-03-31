import { Injectable } from '@angular/core';
import {IUsers} from "../../models/users";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: IUsers;

  constructor() { }


  getUser(): IUsers {
    // возвращается user
    return this.user;
  };
  setUser(user: IUsers): void {
    // записывается пользователь в this.user
    this.user = user;
  };
}
