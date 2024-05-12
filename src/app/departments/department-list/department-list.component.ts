import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Department } from '../../_models/department';
import { DepartmentService } from '../../_services/deparment.service';

@Component({
  selector: 'app-department-list',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './department-list.component.html',
  styleUrl: './department-list.component.css',
})
export class DepartmentListComponent implements OnInit {
  departments: Department[] | null = null;
  constructor(public departmentService: DepartmentService) {}

  ngOnInit() {
    this.departments = this.departmentService.getAll();
  }
  delete(id: number) {
    if (confirm('Are you sure you want to delete this student?')) {
      this.departmentService.delete(id);
    }
  }
}
