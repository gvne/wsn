import { Component, OnInit, Inject, EventEmitter, Output, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FormControl } from '@angular/forms';
import { User } from '../user';
import { authConfig } from '../../environments/auth.environment';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {
  @Output() userSelected = new EventEmitter<User>();
  @Input() placeholder: string = "E-mail";
  private searchControl: FormControl;
  private suggestions: User[];

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.searchControl = new FormControl('');
  }

  search() {
    let queryString = this.searchControl.value;
    this.http.get<User[]>(authConfig.userEndpoint + "?q=" + queryString).
      subscribe(results => {
        this.suggestions = [];
        for (let result of results) {
          this.suggestions.push(User.fromAPIResult(result));
        }
      });
  }

  onUserClick(user: User) {
    this.userSelected.emit(user);
  }

}
