import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LobbyService {
  owner: User = {
    id: "the owner id",
    username: "guillaume",
    email: "guillaume.vincke@gmail.com",
    family_name: "vincke",
    name: "guillaume vincke",
    thumbnail: null
  };

  users: User[] = [
    {
      id: "the first user id",
      username: "bxa",
      email: "bx5a.develop@gmail.com",
      family_name: "develop",
      name: "Bx5a Develop",
      thumbnail: null
    },
    {
      id: "the second user id",
      username: "soyu",
      email: "soyu42moxa@gmail.com",
      family_name: "moxa",
      name: "Soyu Moxa",
      thumbnail: null
    }
  ]

  constructor() { }


  connect(lobbyId: string) {

  }

  getPlaylist() {

  }
}
