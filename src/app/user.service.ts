import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  u1: User = new User('vinay-student@gmail.com', '1234');
  u2: User = new User('raj-admin@gmail.com', '1234');

  users: User[] = [this.u1, this.u2];

  getAllUsers(): User[] {
    return this.users;
  }

  getUserById(id: string): User | undefined {
    let u: User | undefined;
    return this.users.find((user) => {
      u = user.userName === id ? user : undefined;
      return u;
    });
  }
}
