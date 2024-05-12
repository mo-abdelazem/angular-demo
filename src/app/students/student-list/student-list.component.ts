import { Component, OnInit } from '@angular/core';
import { Student } from '../../_models/student';
import { StudentService } from '../../_services/student.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css',
})
export class StudentListComponent implements OnInit {
  students: Student[] | null = null;
  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.students = this.studentService.getAll();
  }
  delete(id: number) {
    if (confirm('Are you sure you want to delete this student?')) {
      this.studentService.delete(id);
    }
  }
}
