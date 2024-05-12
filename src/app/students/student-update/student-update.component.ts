import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Student } from '../../_models/student';
import { StudentService } from '../../_services/student.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-update',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student-update.component.html',
  styleUrl: './student-update.component.css',
})
export class StudentUpdateComponent {
  student: Student | undefined = new Student(0, '', 0);
  sub: Subscription | null = null;

  constructor(
    public activatedRoute: ActivatedRoute,
    public studentService: StudentService
  ) {}
  ngOnInit(): void {
    this.sub = this.activatedRoute.params.subscribe({
      next: (params) => {
        const studentId = +params['id'];
        this.student = this.studentService.getById(studentId);
      },
    });
  }

  update(id: string, name: string, age: string): void {
    if (this.student) {
      this.student.id = parseInt(id, 10);
      this.student.name = name;
      this.student.age = parseInt(age, 10);
    }
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
