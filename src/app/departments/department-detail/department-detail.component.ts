import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Department } from '../../_models/department';
import { DepartmentService } from '../../_services/deparment.service';

@Component({
  selector: 'app-department-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './department-detail.component.html',
  styleUrl: './department-detail.component.css',
})
export class DepartmentDetailComponent implements OnInit {
  department: Department | null = null;
  sub: Subscription | null = null;

  constructor(
    public activatedRoute: ActivatedRoute,
    public departmentService: DepartmentService
  ) {}

  ngOnInit(): void {
    this.sub = this.activatedRoute.params.subscribe({
      next: (params) => {
        this.department = this.departmentService.getById(params['id']) || null;
      },
    });
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
