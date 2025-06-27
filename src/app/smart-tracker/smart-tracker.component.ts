import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-smart-tracker',
  imports: [CommonModule,FormsModule],
  templateUrl: './smart-tracker.component.html',
  styleUrl: './smart-tracker.component.css'
})
export class SmartTrackerComponent {
  taskName = '';
  taskPriority = 'High';
  taskDueDate = '';

  tasks: {
    name: string;
    priority: string;
    dueDate: string;
    completed: boolean;
  }[] = [];

  filter: 'all' | 'completed' | 'pending' = 'all';

  addTask(nameInput: HTMLInputElement, priorityInput: HTMLSelectElement, dateInput: HTMLInputElement) {
  if (this.taskName.trim() && this.taskDueDate.trim()) {
    this.tasks.push({
      name: this.taskName,
      priority: this.taskPriority,
      dueDate: this.taskDueDate,
      completed: false,
    });
  }

  
  this.taskName = '';
  this.taskPriority = 'High';
  this.taskDueDate = '';

 
  nameInput.value = '';
  priorityInput.value = 'High';
  dateInput.value = '';
}


  toggleStatus(task: any) {
    task.completed = !task.completed;
  }

  isOverdue(task: any): boolean {
    const today = new Date().toISOString().split('T')[0];
    return task.dueDate < today && !task.completed;
  }

  get filteredTasks() {
    if (this.filter === 'completed') {
      return this.tasks.filter(task => task.completed);
    } else if (this.filter === 'pending') {
      return this.tasks.filter(task => !task.completed);
    }
    return this.tasks;
  }

  totalTasks() {
    return this.tasks.length;
  }

  completedTasks() {
    return this.tasks.filter(t => t.completed).length;
  }

  pendingTasks() {
    return this.tasks.filter(t => !t.completed).length;
  }

  overdueTasks() {
    return this.tasks.filter(t => this.isOverdue(t)).length;
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

  clearAllTasks() {
    if (confirm('Are you sure you want to delete all tasks?')) {
      this.tasks = [];
    }
  }
}


