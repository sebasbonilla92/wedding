import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  selectedDay = 1;

  days = [
    {
      label: 'Friday',
      date: 'Sep 4',
      title: 'Welcome Party',
      venue: 'Cannario Rooftop',
      venueLink: 'https://www.instagram.com/cannario.rooftop',
      description: 'Kick off wedding weekend with us — cocktails, music, and great company as the sun sets over the city.',
      attire: 'Cocktail Attire',
      events: [
        { time: '4:00 PM', event: 'Welcome Party Starts', description: 'Celebrate the start of the weekend with us at Cannario Rooftop' },
        { time: '7:00 PM', event: 'Welcome Party Ends', description: 'Thanks for joining us for an unforgettable evening!' },
      ]
    },
    {
      label: 'Saturday',
      date: 'Sep 5',
      title: 'The Wedding',
      venue: 'Le Pinot',
      description: 'The big day. Join us as we say I do at Le Pinot in Envigado.',
      events: [
        { time: '3:30 PM', event: 'Guests Arrive', description: 'Please arrive and find your seats' },
        { time: '4:00 PM', event: 'Ceremony Begins', description: 'Join us as we exchange our vows' },
        { time: '5:00 PM', event: 'Cocktail Hour', description: 'Celebrate with drinks and hors d\'oeuvres' },
        { time: '6:00 PM', event: 'Reception & Dinner', description: 'Dinner and dancing with the newlyweds' },
        { time: '8:00 PM', event: 'Party & Celebrate!', description: 'Dance the night away until midnight' },
        { time: '12:00 AM', event: 'Wedding Ends', description: 'Thank you for celebrating with us!' },
      ]
    },
    {
      label: 'Sunday',
      date: 'Sep 6',
      title: 'Chiva Party',
      venue: 'Around Antioquia',
      description: 'Close out the weekend on a traditional Colombian chiva through the beautiful small towns near Medellín.',
      events: [
        { time: '10:00 AM', event: 'Chiva Departs', description: 'Hop on board from Selvario Hotel and let the party begin!' },
        { time: '5:00 PM', event: 'Chiva Returns', description: 'Thanks for joining us for a fun-filled day!' },
      ]
    }
  ];

  selectDay(index: number): void {
    this.selectedDay = index;
  }

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
