import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  username: string = '';
  password: string = '';
  role: string = '';

  __userService: UserService;
  user: User | undefined;
  @Output() getValue: EventEmitter<{ username: string; password: string }> =
    new EventEmitter();

  constructor(private router: Router, __userService: UserService) {
    this.__userService = __userService;
  }

  doLogin(username: string, password: string) {
    this.getValue.emit({ username, password });
    this.user = this.__userService.getUserById(username);
    this.role = username.split('-')[1].split('@')[0];
    if (
      username === this.user?.userName &&
      password === this.user.password &&
      this.role === 'student'
    ) {
      this.router.navigate([`home`], {
        queryParams: { uid: username.split('@')[0] },
      });
    }
    if (
      username === this.user?.userName &&
      password === this.user.password &&
      this.role === 'admin'
    ) {
      this.router.navigate([`home-admin`], {
        queryParams: { uid: username.split('@')[0] },
      });
    }
    // console.log(username);
    // console.log(password);
  }
}
