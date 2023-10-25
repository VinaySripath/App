import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'App';
  // isLoggedIn = false;
  username: string = '';

  onGetValue(user: { username: string; password: string }) {
    console.log('user name::' + user.username + 'password::' + user.password);
    if (user.username.trim() != '' && user.password.trim() != '') {
      this.username = user.username;
      // this.isLoggedIn = true;
    }
  }
}
