import { Injectable } from '@angular/core';

import { authClient } from '../environments/auth.environment';
import { User } from './user'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedInUser: User = null;
  // loggedInUser: User = {
  //   name: "vincke",
  //   surname: "guillaume",
  //   email: "guillaume.vincke@gmail.com",
  //   thumbnail: "https://picsum.photos/200/200"
  // };

  constructor() {
  }

  login(): void {
    console.log("ask to login");
  }
  logout(): void {
    this.loggedInUser = null;
  }
}
