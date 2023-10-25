import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css'],
})
export class AddCourseComponent {
  useruid: string | undefined;
  username: string = '';
  role: string = '';
  message: string = '';
  __courseService: CourseService;

  constructor(private route: ActivatedRoute, __courseService: CourseService) {
    this.__courseService = __courseService;
    this.route.queryParams.subscribe((params) => {
      this.username = params['uid'].split('-')[0];
      this.role = params['uid'].split('-')[1].split('@')[0];
      this.username =
        this.username.charAt(0).toUpperCase() + this.username.slice(1);
    });
    this.route.queryParams.subscribe((params) => {
      if (params) {
        this.useruid = params['uid'];
      }
    });
  }
  ngOnInit() {
    console.log(this.username);
    console.log(this.role);
  }

  addHandler(
    title: string,
    fee: string,
    lang: string,
    rating: string,
    level: string
  ) {
    this.message = this.__courseService.addCourse(
      title,
      fee,
      lang,
      rating,
      level
    );
  }
}
