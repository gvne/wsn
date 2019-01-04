import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth-dialog',
  templateUrl: './auth.dialog.html',
})
export class AuthDialog {
  constructor(
    public dialogRef: MatDialogRef<AuthDialog>,
    @Inject(MAT_DIALOG_DATA) public auth: AuthService
  ) {}

  onOkClick(): void {
    this.dialogRef.close();
  }
  onLogoutClick(): void {
    this.auth.logout();
    this.dialogRef.close();
  }
}
