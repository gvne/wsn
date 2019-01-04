import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-auth-dialog',
  templateUrl: './auth.dialog.html',
})
export class AuthDialog {
  constructor(
    public dialogRef: MatDialogRef<AuthDialog>,
    @Inject(MAT_DIALOG_DATA) public user: User) {}

  onOkClick(): void {
    this.dialogRef.close();
  }
  onLogoutClick(): void {
    // TODO
    this.dialogRef.close();
  }
}
