import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCourseComponent } from './Crud Pages/add-course/add-course.component';
import { AddDepartmentComponent } from './Crud Pages/add-department/add-department.component';
import { AddUserComponent } from './Crud Pages/add-user/add-user.component';
import { CoursefeedbackCrudComponent } from './Crud Pages/coursefeedback-crud/coursefeedback-crud.component';
import { ScheduleReviewComponent } from './Crud Pages/schedule-review/schedule-review.component';
import { TraineefeedbackCrudComponent } from './Crud Pages/traineefeedback-crud/traineefeedback-crud.component';
import { UploadMOMComponent } from './Crud Pages/upload-mom/upload-mom.component';
import { AssignedReviewComponent } from './List Pages/assigned-review/assigned-review.component';
import { CancelledReviewComponent } from './List Pages/cancelled-review/cancelled-review.component';
import { CompletedReviewComponent } from './List Pages/completed-review/completed-review.component';
import { CourseListComponent } from './List Pages/course-list/course-list.component';
import { DepartmentlistComponent } from './List Pages/departmentlist/departmentlist.component';
import { TopicListComponent } from './List Pages/topic-list/topic-list.component';
import { UserlistComponent } from './List Pages/userlist/userlist.component';
import { CommonhomeComponent } from './View Pages/commonhome/commonhome.component';
import { CourseViewComponent } from './View Pages/course-view/course-view.component';
import { CoursefeedbackViewComponent } from './View Pages/coursefeedback-view/coursefeedback-view.component';
import { DashboardComponent } from './View Pages/dashboard/dashboard.component';
import { LoginComponent } from './View Pages/login/login.component';
import { TopicViewComponent } from './View Pages/topic-view/topic-view.component';
import { TraineefeedbackViewComponent } from './View Pages/traineefeedback-view/traineefeedback-view.component';
import { UserProfileComponent } from './View Pages/user-profile/user-profile.component';
import { UserhomeComponent } from './View Pages/userhome/userhome.component';
import { ViewMOMComponent } from './View Pages/view-mom/view-mom.component';

const routes: Routes = [

  //Common Home
  { path: '', component: CommonhomeComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Home', component: UserhomeComponent },
  { path: 'Dashboard', component: DashboardComponent },
  { path: 'UserProfile', component: UserProfileComponent },

  //Department Roting
  { path: 'Departmentlist', component: DepartmentlistComponent },
  { path: 'AddDepartment', component: AddDepartmentComponent },

  { path: 'AddUser', component: AddUserComponent },
  { path: 'Userlist', component: UserlistComponent },
  // {path:'User',
  // children: [
  //   {
  //     path: '',
  //     component: UserlistComponent
  //   },
  //   {
  //     path: ':id',
  //     component: UserProfileComponent
  //   },
  // ]
  // },

  { path: 'AddCourse', component: AddCourseComponent },
  { path: 'CourseList', component: CourseListComponent },
  { path: 'TopicList', component: TopicListComponent },

  { path: 'ScheduleReview', component: ScheduleReviewComponent },
  { path: 'CompletedReview', component: CompletedReviewComponent },
  { path: 'AssignedReview', component: AssignedReviewComponent },
  { path: 'CancelledReview', component: CancelledReviewComponent },

  { path: 'ViewMOM', component: ViewMOMComponent },
  { path: 'UploadMOM', component: UploadMOMComponent },

  { path: 'ViewTraineeFeedback', component: TraineefeedbackViewComponent },
  { path: 'ViewCourseFeedback', component: CoursefeedbackViewComponent },
  { path: 'CourseFeedback', component: CoursefeedbackCrudComponent },
  { path: 'TraineeFeedback', component: TraineefeedbackCrudComponent },
  {path:'CourseView',component:CourseViewComponent},
  {path:'TopicView',component:TopicViewComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
