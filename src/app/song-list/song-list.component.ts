import { Component, OnInit, Input } from '@angular/core';
import { Song } from '../song';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {
  @Input() songs: Song[] = [];

  constructor() { }

  ngOnInit() {
  }

}
