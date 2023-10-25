import { Injectable } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';
import { User } from './user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class StudentEnrolService {
  studentCourse: { user: string; courses: Course[] }[] = [];
  courseStudent: { User: User[] }[] = [];

  __courseService: CourseService;
  __userService: UserService;
  constructor(__courseService: CourseService, __userService: UserService) {
    this.__courseService = __courseService;
    this.__userService = __userService;
  }
  doEnrol(courseName: string, userName: string) {
    let user = this.__userService.getUserById(userName);
    let Course = this.__courseService.getCourseByName(courseName);
    console.log(Course);
    let stuenrol = this.studentCourse.find((obj) => obj.user === userName);
    console.log(stuenrol);
    let Courses: Course[] = [];
    if (stuenrol != undefined) {
      if (Course != undefined && !stuenrol.courses.includes(Course)) {
        stuenrol.courses.push(Course);
        console.log('added course to student');
      }
    } else {
      if (Course != undefined) {
        Courses.push(Course);
        console.log(Courses);
        this.studentCourse.push({ user: userName, courses: Courses });
        console.log(this.studentCourse[0].courses[0]);
        console.log('added student! ');
      }
    }
  }

  getStudentCourses() {
    console.log('ENROLLED COURSES : ' + this.studentCourse);
    return this.studentCourse;
  }
}
