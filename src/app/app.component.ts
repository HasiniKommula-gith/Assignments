import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentDashboardComponent } from "./student-dashboard/student-dashboard.component";
import { SmartTrackerComponent } from "./smart-tracker/smart-tracker.component";
import { TaskManagerComponent } from "./task-manager/task-manager.component";
import { FeedbackComponent } from "./feedback/feedback.component";
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [StudentDashboardComponent, SmartTrackerComponent, TaskManagerComponent, FeedbackComponent, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pracangu';

  
  
}
