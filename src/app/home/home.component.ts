import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
  isPast = false;
  scrolled = false;
  private intervalId: ReturnType<typeof setInterval> | null = null;

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled = window.scrollY > window.innerHeight * 0.85;
  }

  private targetDate = new Date('2026-09-05T16:00:00');

  ngOnInit(): void {
    this.calculateTimeLeft();
    this.intervalId = setInterval(() => this.calculateTimeLeft(), 1000);
    this.initIntersectionObserver();
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private calculateTimeLeft(): void {
    const now = new Date();
    const diff = this.targetDate.getTime() - now.getTime();

    if (diff <= 0) {
      this.isPast = true;
      this.timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
      if (this.intervalId) {
        clearInterval(this.intervalId);
      }
      return;
    }

    this.isPast = false;
    this.timeLeft = {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((diff % (1000 * 60)) / 1000)
    };
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
