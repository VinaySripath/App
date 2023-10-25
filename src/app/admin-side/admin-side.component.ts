import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-side',
  templateUrl: './admin-side.component.html',
  styleUrls: ['./admin-side.component.css'],
})
export class AdminSideComponent {
  useruid: string | undefined;
  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {
      if (params) {
        this.useruid = params['uid'];
      }
    });
  }
}
