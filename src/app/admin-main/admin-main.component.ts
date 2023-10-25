import { Component } from '@angular/core';
import { CourseService } from '../course.service';
import { Course } from '../course';

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.css'],
})
export class AdminMainComponent {
  __courseService: CourseService;
  allCourses: Course[];
  constructor(__courseService: CourseService) {
    this.__courseService = __courseService;
    this.allCourses = __courseService.getAllCourses();
  }
}
