import { Routes } from '@angular/router';
import { StudentCreateComponent } from './students/student-create/student-create.component';
import { StudentDetailComponent } from './students/student-detail/student-detail.component';
import { StudentListComponent } from './students/student-list/student-list.component';
import { StudentUpdateComponent } from './students/student-update/student-update.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DepartmentCreateComponent } from './departments/department-create/department-create.component';
import { DepartmentDetailComponent } from './departments/department-detail/department-detail.component';
import { DepartmentUpdateComponent } from './departments/department-update/department-update.component';
import { DepartmentListComponent } from './departments/department-list/department-list.component';

export const routes: Routes = [
  {
    path: 'students',
    component: StudentListComponent,
    children: [
      { path: 'create', component: StudentCreateComponent },
      { path: ':id', component: StudentDetailComponent },
      { path: ':id/edit', component: StudentUpdateComponent },
    ],
  },
  {
    path: 'departments',
    component: DepartmentListComponent,
    children: [
      { path: 'create', component: DepartmentCreateComponent },
      { path: ':id', component: DepartmentDetailComponent },
      { path: ':id/edit', component: DepartmentUpdateComponent },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
