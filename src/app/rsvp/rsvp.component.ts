import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SupabaseService } from '../supabase.service';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.css']
})
export class RsvpComponent implements OnInit {
  rsvpForm!: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  submitAccepted = false;
  submitError = '';

  constructor(private fb: FormBuilder, private supabase: SupabaseService) {}

  ngOnInit(): void {
    this.rsvpForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      attending: ['yes', Validators.required],
      guestCount: [1, [Validators.min(1), Validators.max(2)]],
      dietaryRestrictions: [''],
      message: ['']
    });

    this.rsvpForm.get('attending')?.valueChanges.subscribe(value => {
      const guestCountControl = this.rsvpForm.get('guestCount');
      if (value === 'yes') {
        guestCountControl?.setValidators([Validators.required, Validators.min(1), Validators.max(2)]);
      } else {
        guestCountControl?.clearValidators();
        guestCountControl?.setValue(0);
      }
      guestCountControl?.updateValueAndValidity();
    });

    this.initIntersectionObserver();
  }

  get isAttending(): boolean {
    return this.rsvpForm.get('attending')?.value === 'yes';
  }

  get fullName() { return this.rsvpForm.get('fullName'); }
  get email() { return this.rsvpForm.get('email'); }
  get attending() { return this.rsvpForm.get('attending'); }

  async onSubmit(): Promise<void> {
    if (this.rsvpForm.invalid) {
      this.rsvpForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.submitError = '';

    const { error } = await this.supabase.client
      .from('rsvps')
      .insert({
        full_name: this.rsvpForm.value.fullName,
        email: this.rsvpForm.value.email,
        attending: this.rsvpForm.value.attending === 'yes',
        guest_count: this.rsvpForm.value.attending === 'yes' ? this.rsvpForm.value.guestCount : 0,
        dietary_restrictions: this.rsvpForm.value.dietaryRestrictions || null,
        message: this.rsvpForm.value.message || null
      });

    if (error) {
      this.submitError = `We encountered an issue submitting your RSVP. Please try again or contact us directly. (${error.message})`;
      console.error('RSVP submission error:', error);
    } else {
      this.submitAccepted = this.rsvpForm.value.attending === 'yes';
      this.submitSuccess = true;
      this.rsvpForm.reset();
    }

    this.isSubmitting = false;
  }

  private initIntersectionObserver(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    setTimeout(() => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach(el => observer.observe(el));
    }, 100);
  }
}
