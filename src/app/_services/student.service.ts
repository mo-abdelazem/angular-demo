import { Injectable } from '@angular/core';
import { Student } from '../_models/student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  flag: boolean = false;

  private students: Student[] = [
    { id: 1, name: 'Mohamed', age: 20 },
    { id: 2, name: 'Ahmed', age: 22 },
    { id: 3, name: 'Ibrahem', age: 21 },
  ];

  getAll() {
    return this.students;
  }

  create(newStudent: Student) {
    this.students.push(newStudent);
  }

  getById(id: number) {
    return this.students.find((s) => s.id == id);
  }

  delete(id: number) {
    const index = this.students.findIndex((s) => s.id === id);
    if (index !== -1) {
      this.students.splice(index, 1);
    }
  }
  constructor() {}
}
