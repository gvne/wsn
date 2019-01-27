import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { LobbyService } from '../lobby.service';
import { User } from '../user';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private lobby: LobbyService
  ) { }

  ngOnInit() {
  }

  connectUser(user: User) {
    this.lobby.connect(user);
  }

}
