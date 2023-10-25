import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css'],
})
export class SideComponent {
  useruid: string | undefined;
  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {
      if (params) {
        this.useruid = params['uid'];
      }
    });
  }
}
