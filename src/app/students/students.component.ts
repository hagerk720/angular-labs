import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  students = [
    { name: 'Hager', email: 'Hager@example.com', age: 22 },
    { name: 'Mariam', email: 'Mariam@example.com', age: 21 },
    { name: 'Radwa', email: 'Radwa@example.com', age: 23 },
    { name: 'Alaa', email: 'Alaa@example.com', age: 20 },
  ];
}
