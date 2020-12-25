import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  courses = [
    {
      id: 1,
      title: 'Angular 9 Fundamentals Shared',
      description: 'Learn the fundamentals of Angular 9',
      percentComplete: 26,
      favorite: true,
    },
    {
      id: 2,
      title: 'Java Scripts the hard Parts Shared',
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

  constructor() { }
}
