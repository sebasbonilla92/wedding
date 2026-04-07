import { Component } from '@angular/core';
import { SupabaseService } from '../supabase.service';

interface Guest {
  id: number;
  full_name: string;
  attending_saturday: boolean | null;
  attending_friday: boolean | null;
  attending_sunday: boolean | null;
  dietary_restrictions: string | null;
  message: string | null;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
})
export class AdminComponent {
  private readonly PASSWORD = 'pichusitos';

  unlocked = false;
  passwordInput = '';
  wrongPassword = false;
  guests: Guest[] = [];
  loading = false;

  constructor(private supabase: SupabaseService) {}

  async unlock(): Promise<void> {
    if (this.passwordInput === this.PASSWORD) {
      this.unlocked = true;
      this.wrongPassword = false;
      await this.loadGuests();
    } else {
      this.wrongPassword = true;
    }
  }

  async loadGuests(): Promise<void> {
    this.loading = true;
    const { data } = await this.supabase.client
      .from('rsvps')
      .select('id, full_name, attending_saturday, attending_friday, attending_sunday, dietary_restrictions, message')
      .order('full_name');
    this.guests = data || [];
    this.loading = false;
  }

  get attending(): Guest[] {
    return this.guests.filter(g => g.attending_saturday === true);
  }

  get declined(): Guest[] {
    return this.guests.filter(g => g.attending_saturday === false);
  }

  get pending(): Guest[] {
    return this.guests.filter(g => g.attending_saturday === null);
  }

  get fridayCount(): number {
    return this.guests.filter(g => g.attending_friday === true).length;
  }

  get sundayCount(): number {
    return this.guests.filter(g => g.attending_sunday === true).length;
  }

  copiedId: number | null = null;

  copyLink(id: number): void {
    const url = `${window.location.origin}/rsvp/${id}`;
    navigator.clipboard.writeText(url);
    this.copiedId = id;
    setTimeout(() => this.copiedId = null, 2000);
  }
}
