import { MatDialog } from '@angular/material';
import { UserDialog } from './user.dialog';
import { UserSearchDialog } from './user-search.dialog';

export class DialogFactory {
  static MakeDialog(type: string, dialog: MatDialog) {
    if (type === "user" ) {
      return dialog.open(UserDialog);
    } else if (type === "user-search") {
      return dialog.open(UserSearchDialog);
    }
  }
}
