import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from '../../_models/department';
import { DepartmentService } from '../../_services/deparment.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-department-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './department-create.component.html',
  styleUrl: './department-create.component.css',
})
export class DepartmentCreateComponent {
  newDepartment: Department = new Department(0, '', '');
  constructor(
    public departmentService: DepartmentService,
    public router: Router
  ) {}

  create(newDepartment: Department) {
    this.departmentService.create(newDepartment);
    this.router.navigate(['/departments']);
  }
}
