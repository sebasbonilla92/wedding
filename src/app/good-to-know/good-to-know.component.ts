import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-good-to-know',
  templateUrl: './good-to-know.component.html',
})
export class GoodToKnowComponent implements OnInit {

  openIndex: number | null = null;

  faqs = [
    {
      q: 'Do I need a visa to visit Colombia?',
      a: 'Citizens of the US, Canada, EU, UK, Australia, and most Latin American countries do not need a visa for stays under 90 days. You will receive an entry stamp at the airport. Make sure your passport is valid for at least 6 months beyond your travel dates.'
    },
    {
      q: 'What is the dress code for the wedding?',
      a: 'Formal / black tie optional. Think elegant — suits and formal attire for men, cocktail or floor-length dresses for women. Keep in mind the weather will be warm, so breathable fabrics are a great idea. Avoid all-white outfits out of respect for the bride.'
    },
    {
      q: 'Is Medellín safe for tourists?',
      a: 'Medellín has transformed significantly and El Poblado is one of the safest and most tourist-friendly neighborhoods in the city. Use common sense — use Uber or InDrive instead of hailing taxis off the street, avoid displaying expensive jewelry or electronics in public, and stick to well-lit areas at night.'
    },
    {
      q: 'What currency should I bring?',
      a: 'The local currency is the Colombian Peso (COP). As of April 2026, $1 USD ≈ $3,678 COP. ATMs are widely available in El Poblado and most restaurants and shops accept credit cards. It\'s a good idea to have some cash on hand for smaller vendors and tips.'
    },
    {
      q: 'How do I get from the airport to El Poblado?',
      a: 'José María Córdova International Airport (MDE) is about 45 km from El Poblado. We recommend using Uber or InDrive — expect to pay $80,000–$150,000 COP depending on the time of day. See our ',
      aAfter: ' page for full details.',
      linkText: 'Getting There',
      linkRoute: '/getting-there'
    },
    {
      q: 'Where should we stay?',
      a: 'We recommend staying in El Poblado, which is Medellín\'s most vibrant neighborhood and conveniently close to the wedding venue and all weekend events. Staying in El Poblado will make getting to and from every celebration easy and stress-free. Check out our ',
      aAfter: ' page for our curated list of hotels and Airbnbs.',
      linkText: 'Where to Stay',
      linkRoute: '/stay'
    },
    {
      q: 'What should I pack?',
      a: 'Medellín sits at 1,500m elevation, giving it a mild "eternal spring" climate. September averages 25°C (77°F) during the day and 16°C (62°F) at night, with frequent short rain showers. Pack light layers, a compact umbrella, and comfortable walking shoes. Smart casual to formal attire for the wedding events.'
    },
    {
      q: 'Are there events beyond the wedding day?',
      a: 'Yes! We have a Welcome Party and a Chiva Party planned in addition to the ceremony. Details for each event can be found on the ',
      aAfter: ' page. More information will be shared closer to the date.',
      linkText: 'Details',
      linkRoute: '/',
      linkFragment: 'details'
    },
    {
      q: 'Can I bring a plus-one?',
      a: 'Each guest is receiving their own individual, curated invitation. If your plus-one is invited, they will receive their own separate invitation directly. Please do not assume you may bring a guest unless that person has received their own invitation. We appreciate your understanding as we celebrate this intimate occasion.'
    },
  ];

  toggle(i: number): void {
    this.openIndex = this.openIndex === i ? null : i;
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
