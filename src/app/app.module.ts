import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Material related imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';

// flex
import { FlexLayoutModule } from "@angular/flex-layout";

import { UserDialog } from './dialog/user.dialog';
import { UserSearchDialog } from './dialog/user-search.dialog';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AppRoutingModule } from './app-routing.module';
import { DialogButtonComponent } from './dialog-button/dialog-button.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { LobbyComponent } from './lobby/lobby.component';
import { UserListComponent } from './user-list/user-list.component';
import { SongListComponent } from './song-list/song-list.component';
import { SongDetailComponent } from './song-detail/song-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    UserDetailComponent,
    ToolbarComponent,
    DialogButtonComponent,

    UserDialog,
    UserSearchDialog,
    UserSearchComponent,
    LobbyComponent,
    UserListComponent,
    SongListComponent,
    SongDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,

    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatDialogModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,

    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    UserDialog,
    UserSearchDialog,
  ],
})
export class AppModule { }
