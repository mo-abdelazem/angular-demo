import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Department } from '../../_models/department';
import { DepartmentService } from '../../_services/deparment.service';

@Component({
  selector: 'app-department-update',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './department-update.component.html',
  styleUrl: './department-update.component.css',
})
export class DepartmentUpdateComponent {
  department: Department | undefined = new Department(0, '', '');
  sub: Subscription | null = null;

  constructor(
    public activatedRoute: ActivatedRoute,
    public departmentService: DepartmentService
  ) {}
  ngOnInit(): void {
    this.sub = this.activatedRoute.params.subscribe({
      next: (params) => {
        const departmentId = +params['id'];
        this.department = this.departmentService.getById(departmentId);
      },
    });
  }

  update(id: string, name: string, location: string): void {
    if (this.department) {
      this.department._id = parseInt(id, 10);
      this.department.name = name;
      this.department.location = location;
    }
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
