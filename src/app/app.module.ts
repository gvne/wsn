import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { AuthDialog } from './auth/auth.dialog';
import { SearchDialog } from './search/search.dialog';

// Material related imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';

// flex
import { FlexLayoutModule } from "@angular/flex-layout";
import { UserDetailComponent } from './user-detail/user-detail.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    AuthDialog,
    UserDetailComponent,
    ToolbarComponent,
    SearchComponent,
    SearchDialog
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,

    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatDialogModule,
    MatToolbarModule,

    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    AuthDialog,
    SearchDialog
  ],
})
export class AppModule { }
