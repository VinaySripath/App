import { Injectable } from '@angular/core';
import { Course } from './course';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor() {}

  c1: Course = new Course('AI', 10000, 'English', 5, 'advanced');
  c2: Course = new Course('Machine Learning', 10000, 'English', 4, 'advanced');
  c3: Course = new Course('Java', 8000, 'English', 5, 'beginner');
  c4: Course = new Course('Python', 8000, 'English', 3, 'beginner');
  c5: Course = new Course('Data Science', 9000, 'English', 4, 'intermediate');
  c6: Course = new Course('Data Engineer', 12000, 'English', 5, 'intermediate');

  allCourses: Course[] = [this.c1, this.c2, this.c3, this.c4, this.c5, this.c6];

  getAllCourses(): Course[] {
    return this.allCourses;
  }

  getCourseByName(name: String): Course | undefined {
    return this.allCourses.find((course) => course.courseName === name);
  }

  addCourse(
    title: string,
    fee: string,
    lang: string,
    rating: string,
    level: string
  ) {
    let cost = parseInt(fee);
    let star = parseInt(rating);
    let course: Course = new Course(title, cost, lang, star, level);
    this.allCourses.push(course);
    return 'Course Added';
  }
}
