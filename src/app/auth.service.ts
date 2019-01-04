import { Injectable } from '@angular/core';

import { authClient } from '../environments/auth.environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
    this.show();
  }

  show(): void {
    console.log(authClient.id);
  }
}
