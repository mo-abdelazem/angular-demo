import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../../_models/student';
import { StudentService } from '../../_services/student.service';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-detail.component.html',
  styleUrl: './student-detail.component.css',
})
export class StudentDetailComponent implements OnInit {
  student: Student | null = null;
  sub: Subscription | null = null;

  constructor(
    public activatedRoute: ActivatedRoute,
    public studentService: StudentService
  ) {}

  ngOnInit(): void {
    this.sub = this.activatedRoute.params.subscribe({
      next: (params) => {
        this.student = this.studentService.getById(params['id']) || null;
      },
    });
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
