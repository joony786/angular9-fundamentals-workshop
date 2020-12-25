import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../shared/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courseLessons = null;

  courses=null;

  constructor(private coursesService:CoursesService) {}

  ngOnInit(): void {
    this.resetCourseLessons();
    this.courses = this.coursesService.courses;
  }


  submitForm(){
    console.log('submited!!')
  }


  resetCourseLessons() {
    const restCourses = {
      id: null,
      title: '',
      description: '',
      percentComplete: 0,
      favorite: false,
    };
    this.courseLessons = restCourses;
  }

  displayCourse(lesson) {
    this.courseLessons = lesson;
  }

  removeList(lesson) {
    this.courseLessons = '';
  }
}
