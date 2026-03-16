import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stay',
  templateUrl: './stay.component.html',
})
export class StayComponent implements OnInit {
  neighborhoods = [
    {
      name: 'Envigado',
      tag: 'Closest to the venue',
      description: 'Where Le Pinot is located. Quieter and more residential than El Poblado, with a great local food scene. Walking distance to the venue.',
    },
    {
      name: 'El Poblado',
      tag: 'Most popular for visitors',
      description: 'The most visited neighborhood in Medellín. Great restaurants, nightlife, and hotel options. About 10 minutes from the venue by car.',
    },
    {
      name: 'Laureles',
      tag: 'Local favorite',
      description: 'A charming, tree-lined neighborhood loved by locals. Relaxed vibe, excellent cafés, and great value. Around 20 minutes from the venue.',
    },
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
