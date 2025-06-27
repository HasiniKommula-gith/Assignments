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
  feedbackList: Feedback[] = [];

  feedback: Feedback = {
    name: '',
    course: '',
    comment: '',
  };

  isEditMode = false;
  currentEditId: number | null = null;

  constructor(private feedbackService: FeedbackService) {}

  ngOnInit() {
    this.loadFeedback();
  }

  loadFeedback() {
    this.feedbackService.getFeedback().subscribe((data) => {
      this.feedbackList = data;
    });
  }

  submitFeedback() {
    if (this.isEditMode && this.currentEditId !== null) {
      this.feedbackService
        .updateFeedback(this.currentEditId, this.feedback)
        .subscribe(() => {
          this.loadFeedback();
          this.resetForm();
        });
    } else {
      this.feedbackService.addFeedback(this.feedback).subscribe(() => {
        this.loadFeedback();
        this.resetForm();
      });
    }
  }

  editFeedback(item: Feedback) {
    this.feedback = { ...item };
    this.currentEditId = item.id!;
    this.isEditMode = true;
  }

  deleteFeedback(id: number) {
    this.feedbackService.deleteFeedback(id).subscribe(() => {
      this.loadFeedback();
    });
  }

  resetForm() {
    this.feedback = { name: '', course: '', comment: '' };
    this.isEditMode = false;
    this.currentEditId = null;
  }

}
