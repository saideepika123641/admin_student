import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcademyComponent } from './academy/academy.component';
import { CourseComponent } from './course/course.component';
import { StudentComponent } from './student/student.component';
import { LagoutComponent } from './lagout/lagout.component';

const routes: Routes = [
  { path: 'academy', component: AcademyComponent},
  { path: 'course', component: CourseComponent},
  { path: 'student', component: StudentComponent},
  { path: 'lagout', component: LagoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
