import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-courses-details',
  templateUrl: './courses-details.component.html',
  styleUrls: ['./courses-details.component.scss']
})
export class CoursesDetailsComponent  {

  @Input() course;

  @Output() saved = new EventEmitter()
  @Output() cancelled = new EventEmitter()


}
