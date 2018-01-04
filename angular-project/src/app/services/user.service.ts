import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  private isUserLoggedIn: boolean;
  private username: string;

  constructor() { }

  setUserLoggedIn(): void {
      this.isUserLoggedIn = true;
  }

  getUserLoggedIn(): boolean {
      return this.isUserLoggedIn;
  }
}
