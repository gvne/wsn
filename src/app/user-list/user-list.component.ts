import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Input() owner: User = null;
  @Input() users: User[] = [];

  constructor() { }

  ngOnInit() {
  }

}
