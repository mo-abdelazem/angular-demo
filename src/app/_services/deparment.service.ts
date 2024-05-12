import { Injectable } from '@angular/core';
import { Department } from '../_models/department';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  constructor(public http: HttpClient) {}
  public departments: Department[] = [
    { _id: 1, name: 'class', location: 'cairo' },
    { _id: 2, name: 'pd', location: 'alex' },
  ];

  getAll() {
    return this.departments;
  }

  create(newDepartment: Department) {
    this.departments.push(newDepartment);
  }

  getById(id: number) {
    return this.departments.find((d) => d._id == id);
  }

  delete(id: number) {
    const index = this.departments.findIndex((d) => d._id === id);
    if (index !== -1) {
      this.departments.splice(index, 1);
    }
  }
}
