import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { SearchDialog } from './search.dialog';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  onButtonClick() {
    const dialogRef = this.dialog.open(SearchDialog, {
      //data: this.auth
    });
  }
}
