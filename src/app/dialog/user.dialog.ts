import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user.dialog.html',
})
export class UserDialog {
  constructor(
    public dialogRef: MatDialogRef<UserDialog>,
    private auth: AuthService
  ) {}

  onOkClick(): void {
    this.dialogRef.close();
  }
  onLogoutClick(): void {
    this.auth.logout();
    this.dialogRef.close();
  }
}
