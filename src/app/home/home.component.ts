import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  username: string = '';
  queryusername: string = '';
  role: string = '';

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {
      this.queryusername = params['uid'];
      this.username = params['uid'].split('-')[0];
      this.role = params['uid'].split('-')[1].split('@')[0];
      this.username =
        this.username.charAt(0).toUpperCase() + this.username.slice(1);
    });
  }

  ngOnInit() {
    console.log(this.username);
    console.log(this.role);
  }
}
