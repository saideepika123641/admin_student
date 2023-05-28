import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcademyComponent } from './academy/academy.component';
import { CourseComponent } from './course/course.component';
import { StudentComponent } from './student/student.component';
import { LagoutComponent } from './lagout/lagout.component';

@NgModule({
  declarations: [
    AppComponent,
    AcademyComponent,
    CourseComponent,
    StudentComponent,
    LagoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
