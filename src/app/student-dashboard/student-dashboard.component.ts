import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-dashboard',
  imports: [CommonModule, FormsModule],
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent {
  studentName = '';
  studentGrade = '';
  students: { name: string; grade: string }[] = [];

  addStudent(nameInput: HTMLInputElement, gradeInput: HTMLInputElement) {
    if (this.studentName.trim() && this.studentGrade.trim()) {
      this.students.push({
        name: this.studentName,
        grade: this.studentGrade.toUpperCase(),
      });
    }
    nameInput.value = '';
    gradeInput.value = '';
    this.studentName = '';
    this.studentGrade = '';
  }

}
