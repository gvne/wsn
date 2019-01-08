import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';

import { DialogFactory } from '../dialog/dialog.factory';

@Component({
  selector: 'app-dialog-button',
  templateUrl: './dialog-button.component.html',
  styleUrls: ['./dialog-button.component.css']
})
export class DialogButtonComponent implements OnInit {
  @Input() type: string = null;

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  onClick() {
    DialogFactory.MakeDialog(this.type, this.dialog);
  }
}
