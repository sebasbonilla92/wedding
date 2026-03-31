import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SupabaseService } from '../supabase.service';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.css']
})
export class RsvpComponent implements OnInit {
  rsvpForm!: FormGroup;
  isSubmitting = false;
  isLoading = true;
  submitSuccess = false;
  submitAccepted = false;
  submitError = '';
  notFound = false;
  attendanceChosen = false;

  guestName = '';
  guestEmail = '';
  private guestId = '';

  constructor(
    private fb: FormBuilder,
    private supabase: SupabaseService,
    private route: ActivatedRoute
  ) {}

  async ngOnInit(): Promise<void> {
    this.rsvpForm = this.fb.group({
      attending: [null, Validators.required],
      attendingFriday: [false],
      attendingSunday: [false],
      dietaryRestrictions: [''],
      message: ['']
    });

    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      this.notFound = true;
      this.isLoading = false;
      return;
    }

    this.guestId = id;
    const { data, error } = await this.supabase.client
      .from('rsvps')
      .select('*')
      .eq('id', id)
      .single();

    if (error || !data) {
      this.notFound = true;
      this.isLoading = false;
      return;
    }

    this.guestName = data.full_name;
    this.guestEmail = data.email;

    if (data.attending_saturday !== null && data.attending_saturday !== undefined) {
      this.submitAccepted = data.attending_saturday;
      this.submitSuccess = true;
    }

    this.isLoading = false;
    this.initIntersectionObserver();
  }

  get isAttending(): boolean {
    return this.rsvpForm.get('attending')?.value === 'yes';
  }

  selectAttendance(value: 'yes' | 'no'): void {
    this.rsvpForm.get('attending')?.setValue(value);
    this.attendanceChosen = true;
  }

  async onSubmit(): Promise<void> {
    if (this.rsvpForm.invalid) {
      this.rsvpForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.submitError = '';

    const attending = this.rsvpForm.value.attending === 'yes';

    const { error } = await this.supabase.client
      .from('rsvps')
      .update({
        attending_saturday: attending,
        attending_friday: attending ? this.rsvpForm.value.attendingFriday : false,
        attending_sunday: attending ? this.rsvpForm.value.attendingSunday : false,
        dietary_restrictions: attending ? (this.rsvpForm.value.dietaryRestrictions?.trim() || null) : null,
        message: this.rsvpForm.value.message || null
      })
      .eq('id', this.guestId);

    if (error) {
      this.submitError = `Something went wrong. Please try again or contact us directly. (${error.message})`;
      console.error('RSVP error:', error);
    } else {
      this.submitAccepted = attending;
      this.submitSuccess = true;
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
