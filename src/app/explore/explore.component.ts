import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentEnrolService } from '../student-enrol.service';
import { Course } from '../course';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css'],
})
export class ExploreComponent {
  username: string = '';
  role: string = '';
  __studentEnrolService: StudentEnrolService;
  studentCourses: Course[] | undefined = [];

  constructor(
    private route: ActivatedRoute,
    __studentEnrolService: StudentEnrolService
  ) {
    this.__studentEnrolService = __studentEnrolService;
    this.route.queryParams.subscribe((params) => {
      this.username = params['uid'].split('-')[0];
      this.role = params['uid'].split('-')[1].split('@')[0];
      this.username =
        this.username.charAt(0).toUpperCase() + this.username.slice(1);
    });
    this.studentCourses = __studentEnrolService
      .getStudentCourses()
      .find((obj) => {
        return obj.user === this.username.toLowerCase();
      })?.courses;
  }

  ngOnInit() {
    console.log(this.username);
    console.log(this.role);
  }
}
