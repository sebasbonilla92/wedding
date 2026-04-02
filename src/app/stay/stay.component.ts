import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stay',
  templateUrl: './stay.component.html',
  styles: [`.instagram-btn { color: oklch(80.8% 0.114 19.571); } .instagram-btn:hover { background-color: oklch(80.8% 0.114 19.571); color: oklch(22% 0.1 19.571); }`],
})
export class StayComponent implements OnInit {
  activeTab: 'hotels' | 'airbnb' = 'hotels';

  hotels = [
    {
      name: 'Click Clack Hotel',
      neighborhood: 'El Poblado — Zona Rosa',
      address: 'Calle 10B #37-29, Medellín',
      description: 'Modern design hotel in the heart of El Poblado. Social atmosphere, walkable to the best bars and restaurants.',
      ideal: 'Young guests, nightlife, walkable everything',
      link: 'https://www.clickclackhotel.com/en/hotels/colombia/medellin/clickclackmedellin/',
      instagram: 'https://www.instagram.com/clickclackhotels/',
    },
    {
      name: 'Selvario Hotel',
      neighborhood: 'El Poblado — Parque Lleras',
      address: 'Carrera 36 #8A-39, Medellín',
      description: 'Trendy boutique hotel right at Parque Lleras. Vibrant, social, and in the center of it all.',
      ideal: 'Guests who want to be in the middle of everything',
      link: 'https://selvario36hotel.com/en/',
      instagram: 'https://www.instagram.com/selvario36hotel/',
    },
    {
      name: '23 Hotel',
      neighborhood: 'El Poblado — Zona Rosa',
      address: 'Carrera 34 #5G-62, Medellín',
      description: 'Modern and compact, well-located in Zona Rosa. A solid choice for a short stay with easy access to dining and nightlife.',
      ideal: 'Young guests, short stays',
      link: 'https://23hotel.co/',
      instagram: 'https://www.instagram.com/23hotel/',
    },
    {
      name: 'El Cielo Hotel',
      neighborhood: 'El Poblado — Quieter side',
      address: 'Calle 7D #43C-36, Medellín',
      description: 'Boutique luxury hotel near Zona Rosa but away from the noise. Refined experience with a calmer atmosphere.',
      ideal: 'Adults or couples looking for peace without losing proximity',
      link: 'https://www.elcielohotel.com/en',
      instagram: 'https://www.instagram.com/elcielohotel/',
    },
    {
      name: 'Binn Hotel',
      neighborhood: 'El Poblado — Upper area',
      address: 'Carrera 25 #10-51, Transversal Superior, Medellín',
      description: 'Upscale hotel in the elevated, quieter part of El Poblado. Great views, more private, premium feel.',
      ideal: 'Adults, family, premium experience',
      link: 'https://binnhotel.com/',
      instagram: 'https://www.instagram.com/binnhotel/',
    },
    {
      name: 'Lettera Hotel',
      neighborhood: 'El Poblado — Residential',
      address: 'Calle 5F #30-73, El Poblado',
      description: 'Quiet and modern, away from the noise but still in El Poblado. A good balance between location and rest.',
      ideal: 'Guests who want calm with good access',
      link: 'https://www.letterahotel.com/en/',
      instagram: 'https://www.instagram.com/letterahotel/',
    },
  ];

  airbnbs = [
    {
      name: 'The Best Apartment Poblado',
      neighborhood: 'El Poblado',
      guests: '6 guests · 3 bedrooms · 3 beds · 2 baths',
      description: 'Guest favorite with a perfect 5.0 rating. AC in every room, full kitchen, hot tub, and unbeatable location — close to bars, restaurants, and walkable streets. Hosted by Marle, Superhost.',
      price: '$514 for 3 nights (Sep 4–7)',
      tag: '⭐ Guest Favorite',
      link: 'https://www.airbnb.com/rooms/1558024663309922958?check_in=2026-09-04&check_out=2026-09-07',
    },
    {
      name: 'Studio · Poblado · A/C + 300Mb WiFi',
      neighborhood: 'El Poblado',
      guests: '2 guests · 1 bedroom · 1 bed · 1 bath',
      description: 'Stylish private studio just off Calle 10 — 2 min walk to Poblado Park, 4 min to Lleras. A/C, 300 Mbps WiFi, Smart TV with Netflix, full kitchen, and free laundry service. Hosted by Alex.',
      price: '$216 for 3 nights (Sep 4–7)',
      tag: '⭐ Guest Favorite',
      link: 'https://www.airbnb.com/rooms/954667752239393077?check_in=2026-09-04&check_out=2026-09-07',
    },
    {
      name: 'Luxury Apartment in Parque Poblado',
      neighborhood: 'El Poblado',
      guests: '2 guests · 1 bedroom · 1.5 baths',
      description: 'Right at Parque Poblado. King bed with Egyptian cotton, 85" TV with soundbar, private patio with daybed, A/C, washer/dryer, and 500+ Mbps WiFi. Perfect 5.0 rating. Hosted by Eric, Superhost.',
      price: '$442 for 3 nights (Sep 4–7)',
      tag: '⭐ Guest Favorite',
      link: 'https://www.airbnb.com/rooms/1102891484417799006?check_in=2026-09-04&check_out=2026-09-07',
    },
  ];

  setTab(tab: 'hotels' | 'airbnb'): void {
    this.activeTab = tab;
    setTimeout(() => this.initIntersectionObserver(), 50);
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

    document.querySelectorAll('.fade-in:not(.visible)').forEach(el => observer.observe(el));
  }
}
