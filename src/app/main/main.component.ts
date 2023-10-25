import { Component } from '@angular/core';
import { CourseService } from '../course.service';
import { Course } from '../course';
import { StudentEnrolService } from '../student-enrol.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  userName: string = '';
  __courseService: CourseService;
  __studentEnrolService: StudentEnrolService;
  allCourses: Course[];
  constructor(
    private route: ActivatedRoute,
    __courseService: CourseService,
    __studentEnrolService: StudentEnrolService
  ) {
    this.route.queryParams.subscribe((params) => {
      if (params) {
        this.userName = params['uid'].split('-')[0];
      }
    });
    this.__courseService = __courseService;
    this.__studentEnrolService = __studentEnrolService;
    this.allCourses = __courseService.getAllCourses();
  }

  doEnrol(courseName: string) {
    this.__studentEnrolService.doEnrol(courseName, this.userName);
  }
}
