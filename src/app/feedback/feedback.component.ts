import { Component } from '@angular/core';
import { Feedback, FeedbackService } from '../feedback.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  imports: [FormsModule, CommonModule],
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  feedback = {
    name: '',
    course: '',
    comment: ''
  };

  feedbackList: any[] = [];

  isEditMode: boolean = false;
  editingId: number | null = null;

  submitFeedback() {
    if (this.isEditMode) {
      this.feedbackList = this.feedbackList.map((fb) =>
        fb.id === this.editingId ? { ...this.feedback, id: this.editingId } : fb
      );
      this.isEditMode = false;
      this.editingId = null;
    } else {
      const newFeedback = { ...this.feedback, id: Date.now() };
      this.feedbackList.push(newFeedback);
    }

    
    this.feedback = { name: '', course: '', comment: '' };
  }

  editFeedback(fb: any) {
    this.feedback = { name: fb.name, course: fb.course, comment: fb.comment };
    this.isEditMode = true;
    this.editingId = fb.id;
  }

  deleteFeedback(id: number) {
    this.feedbackList = this.feedbackList.filter(fb => fb.id !== id);
  }


}
