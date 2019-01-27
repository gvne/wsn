import { Injectable } from '@angular/core';
import { User } from './user';
import { Song } from './song';

@Injectable({
  providedIn: 'root'
})
export class LobbyService {
  owner: User = null;

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
  ];

  currentSong: Song = {
    id: "1",
    title: "the first song",
    thumbnail: null
  };

  playlist: Song[] = [
    {
      id: "1",
      title: "the first song",
      thumbnail: null
    },
    {
      id: "2",
      title: "the second song",
      thumbnail: null
    },
    {
      id: "3",
      title: "the third song",
      thumbnail: null
    }
  ];

  constructor() { }


  connect(owner: User) {
    // update the owner
    this.owner = owner;
  }
}
