import { Component } from '@angular/core';
import { Student } from '../../_models/student';
import { Router } from '@angular/router';
import { StudentService } from '../../_services/student.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './student-create.component.html',
  styleUrl: './student-create.component.css',
})
export class StudentCreateComponent {
  student: Student = new Student(0, '', 0);
  constructor(public studentService: StudentService, public router: Router) {}

  create(student: Student) {
    this.studentService.create(student);
    this.router.navigate(['/students']);
  }
}
