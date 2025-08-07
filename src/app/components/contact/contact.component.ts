import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  private contactService = inject(ContactService);
  private fb = inject(FormBuilder);

  contactForm: FormGroup;
  isSubmitting = false;
  showSuccessPopup = false;

  constructor() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email, Validators.pattern(/.*@.*/)]],
      phone: ['', [Validators.pattern(/^[\d\s\-\+\(\)]+$/)]], // Optional phone validation
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  // Getter methods for easy template access
  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get phone() { return this.contactForm.get('phone'); }
  get message() { return this.contactForm.get('message'); }

  // Check if field is invalid and touched
  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return field ? (field.invalid && (field.dirty || field.touched)) : false;
  }

  // Get error message for a field
  getErrorMessage(fieldName: string): string {
    const field = this.contactForm.get(fieldName);
    if (!field || !field.errors) return '';

    if (field.errors['required']) {
      return `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required`;
    }
    if (field.errors['email']) {
      return 'Please enter a valid email address';
    }
    if (field.errors['pattern']) {
      if (fieldName === 'email') {
        return 'Email must contain @ symbol';
      }
      if (fieldName === 'phone') {
        return 'Please enter a valid phone number';
      }
    }
    if (field.errors['minlength']) {
      const requiredLength = field.errors['minlength'].requiredLength;
      if (fieldName === 'name') {
        return `Name must be at least ${requiredLength} characters`;
      }
      if (fieldName === 'message') {
        return `Message must be at least ${requiredLength} characters`;
      }
    }

    return 'Invalid input';
  }

  onSubmit() {
    if (this.isSubmitting || this.contactForm.invalid) return;

    // Mark all fields as touched to trigger validation display
    this.contactForm.markAllAsTouched();

    if (this.contactForm.valid) {
      this.isSubmitting = true;

      const messageData = {
        Name: this.contactForm.value.name,
        Email: this.contactForm.value.email,
        PhoneNumber: this.contactForm.value.phone,
        Message: this.contactForm.value.message
      };

      console.log('Sending message:', messageData);

      this.contactService.sendMessage(messageData).subscribe({
        next: (response: any) => {
          console.log('Message sent successfully:', response);
          this.showSuccessPopup = true;
          this.contactForm.reset();
          
          // Hide popup after 3 seconds
          setTimeout(() => {
            this.showSuccessPopup = false;
          }, 3000);
        },
        error: (error: any) => {
          console.error('Error sending message:', error);
          alert('Something went wrong while sending your message. Please try again.');
        },
        complete: () => {
          this.isSubmitting = false;
        }
      });
    }
  }

  // Close success popup
  closeSuccessPopup() {
    this.showSuccessPopup = false;
  }
}
