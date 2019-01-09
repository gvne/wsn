import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-user-search-dialog',
  templateUrl: './user-search.dialog.html',
})
export class UserSearchDialog {
  constructor(
    public dialogRef: MatDialogRef<UserSearchDialog>
  ) {}

  onCloseClick(): void {
    this.dialogRef.close();
  }
}
