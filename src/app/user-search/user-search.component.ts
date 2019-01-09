import { Component, OnInit, Inject } from '@angular/core';
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
      subscribe(result => {
        this.suggestions = result;
      });
  }
}
