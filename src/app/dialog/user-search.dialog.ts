import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HttpClient } from '@angular/common/http';

import { FormControl } from '@angular/forms';
import { User } from '../user';

import { authConfig } from '../../environments/auth.environment';

@Component({
  selector: 'app-user-search-dialog',
  templateUrl: './user-search.dialog.html',
})
export class UserSearchDialog {
  private searchControl: FormControl;
  private suggestions: User[];
  private isSearching: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<UserSearchDialog>,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.searchControl = new FormControl('');
    // this.searchControl.valueChanges.subscribe(
    //   () => { this.suggestCompletion(); }
    // );
  }

  onOkClick(): void {
    this.dialogRef.close();
  }
  onCloseClick(): void {
    this.dialogRef.close();
  }
  // suggestCompletion() {
  //   // TODO: find a way to limit the number of query made to the search api as
  //   // we have to pay per query
  //   if (this.isSearching) {
  //     return;
  //   }
  //   this.isSearching = true;
  //   let queryString = this.searchControl.value;
  //   this.http.get<User[]>(authConfig.userEndpoint + "?q=" + queryString).
  //     subscribe(result => {
  //       this.suggestions = result;
  //       this.isSearching = false;
  //     });
  // }
}
