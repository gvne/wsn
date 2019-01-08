import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-search-dialog',
  templateUrl: './search.dialog.html',
})
export class SearchDialog {
  constructor(
    public dialogRef: MatDialogRef<AuthDialog>,
    @Inject(MAT_DIALOG_DATA) public auth: AuthService
  ) {}

  // onOkClick(): void {
  //   this.dialogRef.close();
  // }
  // onLogoutClick(): void {
  //   this.auth.logout();
  //   this.dialogRef.close();
  // }
}
