import { Routes } from '@angular/router';
import { TaskManagerComponent } from './task-manager/task-manager.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { FeedbackComponent } from './feedback/feedback.component';


export const routes: Routes = [
     { path: '', redirectTo: 'task-manager', pathMatch: 'full' },
  { path: 'task-manager', component: TaskManagerComponent },
  { path: 'student-dashboard', component: StudentDashboardComponent },
   { path: 'feedback-portal', component: FeedbackComponent }
];
