import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface MessageForm {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  messageForm: MessageForm = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  isSubmitting = false;
  showSuccessMessage = false;

  async onSubmit() {
    if (this.isSubmitting) return;
    this.isSubmitting = true;

    // Simulating form submission
    try {
      console.log('Sending message:', this.messageForm);
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Reset form
      this.messageForm = {
        name: '',
        email: '',
        phone: '',
        message: ''
      };
      
      // Show success message
      this.showSuccessMessage = true;
      setTimeout(() => {
        this.showSuccessMessage = false;
      }, 3000);
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      this.isSubmitting = false;
    }
  }
}
