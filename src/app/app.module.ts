import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { AuthDialog } from './auth/auth.dialog';
import { SearchDialog } from './search/search.dialog';
import { UserDialog } from './dialog/user.dialog';
import { UserSearchDialog } from './dialog/user-search.dialog';

// Material related imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';

// flex
import { FlexLayoutModule } from "@angular/flex-layout";
import { UserDetailComponent } from './user-detail/user-detail.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchComponent } from './search/search.component';
import { DialogButtonComponent } from './dialog-button/dialog-button.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    AuthDialog,
    UserDetailComponent,
    ToolbarComponent,
    SearchComponent,
    SearchDialog,
    UserDialog,
    UserSearchDialog,

    DialogButtonComponent
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

    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    AuthDialog,
    SearchDialog,
    UserDialog,
    UserSearchDialog,
  ],
})
export class AppModule { }
