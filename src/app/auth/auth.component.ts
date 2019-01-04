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
  user: User = {
    name: "vincke",
    surname: "guillaume",
    email: "guillaume.vincke@gmail.com",
    thumbnail: "https://picsum.photos/200/200"
  };

  constructor(
    public dialog: MatDialog,
    private auth: AuthService
  ) { }

  ngOnInit() { }

  onLoginClick(): void {
    // open the user dialog
    const dialogRef = this.dialog.open(AuthDialog, {
      data: this.user
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
