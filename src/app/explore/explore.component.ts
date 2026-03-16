import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
})
export class ExploreComponent implements OnInit {
  categories = [
    {
      label: 'Eat & Drink',
      icon: '🍽',
      places: [
        { name: 'El Cielo', note: 'World-class tasting menu experience in El Poblado' },
        { name: 'Mondongos', note: 'Iconic local spot for traditional Antioquian food' },
        { name: 'Pergamino Café', note: 'The best specialty coffee in the city' },
      ]
    },
    {
      label: 'See & Do',
      icon: '🗺',
      places: [
        { name: 'Plaza Botero', note: 'Open-air sculpture park with 23 Botero statues' },
        { name: 'Metrocable', note: 'Cable car with stunning views over the city' },
        { name: 'Parque Arví', note: 'Ecological reserve at the top of the cable car' },
      ]
    },
    {
      label: 'Day Trips',
      icon: '🚗',
      places: [
        { name: 'Guatapé', note: 'Colorful town with El Peñol rock — 1.5 hrs from Medellín' },
        { name: 'Santa Fe de Antioquia', note: 'Colonial heritage town, 1 hr away' },
        { name: 'Jardín', note: 'A jewel of a coffee town, 3 hrs south' },
      ]
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
