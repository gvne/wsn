import { Component, OnInit } from '@angular/core';
import { User } from '../user'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  user: User = {
    name: "vincke",
    surname: "guillaume",
    email: "guillaume.vincke@gmail.com"
  };

  constructor() { }

  ngOnInit() {

  }

}
