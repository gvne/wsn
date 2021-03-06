import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { LobbyService } from '../lobby.service';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private lobby: LobbyService
  ) { }

  ngOnInit() {
  }

}
