import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courseLessons = null;

  courses = [
    {
      id: 1,
      title: 'Angular 9 Fundamentals',
      description: 'Learn the fundamentals of Angular 9',
      percentComplete: 26,
      favorite: true,
    },
    {
      id: 2,
      title: 'Java Scripts the hard Parts',
      description: 'Learn the fundamentals of Js ',
      percentComplete: 60,
      favorite: true,
    },
    {
      id: 3,
      title: 'React 17 Fundamentals',
      description: 'Learn the fundamentals of React ',
      percentComplete: 44,
      favorite: true,
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.resetCourseLessons();
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
