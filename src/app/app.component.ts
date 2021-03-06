import { Component } from '@angular/core';
import { LobbyService } from './lobby.service';
import { AuthService } from './auth.service';
// import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'whatsnext';

  constructor(
    private auth: AuthService,
    private lobby: LobbyService
  ) {}

  // onUserSelected(user: User) {
  //   console.log(user);
  // }
}
