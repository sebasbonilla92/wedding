import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  schedule = [
    { time: '3:30 PM', event: 'Guests Arrive', description: 'Please arrive and find your seats' },
    { time: '4:00 PM', event: 'Ceremony Begins', description: 'Join us as we exchange our vows' },
    { time: '4:45 PM', event: 'Reception & Dinner', description: 'Celebrate with dinner and dancing' },
    { time: '7:00 PM', event: 'Evening Celebrations', description: 'Continue the festivities into the night' },
  ];

  ngOnInit(): void {
    this.initIntersectionObserver();
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
