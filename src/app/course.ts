export class Course {
  courseName: string;
  courseFee: number;
  language: string;
  rating: number;
  level: string;

  constructor(
    courseName: string,
    courseFee: number,
    language: string,
    rating: number,
    level: string
  ) {
    this.courseName = courseName;
    this.courseFee = courseFee;
    this.language = language;
    this.rating = rating;
    this.level = level;
  }
}
