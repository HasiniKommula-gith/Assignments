import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskListComponent } from "../task-list/task-list.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-task-manager',
  imports: [CommonModule, FormsModule, TaskListComponent],
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent {
   taskName = '';
  taskPriority = 'High';
  tasks: { name: string; priority: string; completed: boolean }[] = [];

  addTask(nameInput: HTMLInputElement, priorityInput: HTMLSelectElement) {
    if (this.taskName.trim()) {
      this.tasks.push({
        name: this.taskName,
        priority: this.taskPriority,
        completed: false,
      });
      this.taskName = '';
      this.taskPriority = 'High';
      nameInput.value = '';
      priorityInput.value = 'High';
    }
  }

  markTaskAsCompleted(index: number) {
    this.tasks[index].completed = true;
  }

}
