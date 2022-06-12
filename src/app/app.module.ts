import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { CommonhomeComponent } from './View Pages/commonhome/commonhome.component';
import { DashboardComponent } from './View Pages/dashboard/dashboard.component';
import { UserhomeComponent } from './View Pages/userhome/userhome.component';
import { LoginComponent } from './View Pages/login/login.component';
import { UserlistComponent } from './List Pages/userlist/userlist.component';
import { DepartmentlistComponent } from './List Pages/departmentlist/departmentlist.component';
import { HttpClientModule } from '@angular/common/http';
import { PaginationComponent } from './Components/pagination/pagination.component';
import { UserProfileComponent } from './View Pages/user-profile/user-profile.component';
import { AddCourseComponent } from './Crud Pages/add-course/add-course.component';
import { CompletedReviewComponent } from './List Pages/completed-review/completed-review.component';
import { CancelledReviewComponent } from './List Pages/cancelled-review/cancelled-review.component';
import { AssignedReviewComponent } from './List Pages/assigned-review/assigned-review.component';
import { ScheduleReviewComponent } from './Crud Pages/schedule-review/schedule-review.component';
import { ViewMOMComponent } from './View Pages/view-mom/view-mom.component';
import { UploadMOMComponent } from './Crud Pages/upload-mom/upload-mom.component';
import { CourseListComponent } from './List Pages/course-list/course-list.component';
import { TopicListComponent } from './List Pages/topic-list/topic-list.component';
import { CoursefeedbackViewComponent } from './View Pages/coursefeedback-view/coursefeedback-view.component';
import { TraineefeedbackViewComponent } from './View Pages/traineefeedback-view/traineefeedback-view.component';
import { CoursefeedbackCrudComponent } from './Crud Pages/coursefeedback-crud/coursefeedback-crud.component';
import { TraineefeedbackCrudComponent } from './Crud Pages/traineefeedback-crud/traineefeedback-crud.component';
import { AddDepartmentComponent } from './Crud Pages/add-department/add-department.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CourseViewComponent } from './View Pages/course-view/course-view.component';
import { TopicViewComponent } from './View Pages/topic-view/topic-view.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FooterComponent,
    CommonhomeComponent,
    DashboardComponent,
    UserhomeComponent,
    LoginComponent,
    UserlistComponent,
    DepartmentlistComponent,
    PaginationComponent,
    UserProfileComponent,
    AddCourseComponent,
    CompletedReviewComponent,
    CancelledReviewComponent,
    AssignedReviewComponent,
    ScheduleReviewComponent,
    ViewMOMComponent,
    UploadMOMComponent,
    CourseListComponent,
    TopicListComponent,
    CoursefeedbackViewComponent,
    TraineefeedbackViewComponent,
    CoursefeedbackCrudComponent,
    TraineefeedbackCrudComponent,
    AddDepartmentComponent,
    CourseViewComponent,
    TopicViewComponent,
  ],
  imports: [ BrowserModule,AppRoutingModule,FormsModule,HttpClientModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
