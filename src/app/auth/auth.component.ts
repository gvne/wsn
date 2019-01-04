import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material';

import { AuthDialog } from './auth.dialog';
import { AuthService } from '../auth.service';

import { User } from '../user'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private auth: AuthService
  ) { }

  ngOnInit() {
  }

  onLoginClick(): void {
    if (!this.auth.loggedInUser) {
      this.auth.login();
      return;
    }

    // open the user dialog
    const dialogRef = this.dialog.open(AuthDialog, {
      data: this.auth
    });
  }
}
