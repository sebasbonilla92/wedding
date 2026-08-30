import { Component, OnInit } from '@angular/core';

interface Place {
  name: string;
  note: string;
  instagram?: string;
  highlight?: boolean;
}

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
})
export class ExploreComponent implements OnInit {
  categories: { label: string; icon: string; places: Place[] }[] = [
    {
      label: 'Eat & Drink',
      icon: '🍽',
      places: [
        { name: 'Carmen', note: 'One of Medellín\'s most acclaimed restaurants — refined Colombian farm-to-table cuisine in an elegant El Poblado setting', instagram: 'https://www.instagram.com/carmenrestaurante/' },
        { name: 'La Causa', note: 'Nikkei restaurant fusing Peruvian and Japanese cuisine — fresh ceviches, causas, sushi, and pokes with creative flavor combinations', instagram: 'https://www.instagram.com/lacausa.mde' },
        { name: 'Simah', note: 'Contemporary cuisine with panoramic city views along Las Palmas — striking presentation and a lively atmosphere', instagram: 'https://www.instagram.com/simah_restaurante/' },
        { name: 'Ritwal', note: 'Fusion cuisine and craft cocktails in a lush, dreamlike setting in Alto de los Balsos — one of the most photogenic spots in the city', instagram: 'https://www.instagram.com/ritwalmesamistica/' },
        { name: 'Wan', note: 'Stylish Japanese-Asian fusion restaurant in Provenza known for creative sushi and a great cocktail list', instagram: 'https://www.instagram.com/wan.restaurante/' },
        { name: 'Belisario', note: 'Mexican-Colombian small plates and cocktails in a buzzing Provenza setting — great for a lively night out', instagram: 'https://www.instagram.com/belisario.mde/' },
        { name: 'Ocio / Oci.Mde', note: 'A romantic, industrial-chic spot in El Poblado with a seasonal menu and creative cocktails', instagram: 'https://www.instagram.com/ocio.mde/' },
        { name: 'Alambique', note: 'A bohemian rooftop bar and culinary lab tucked above an art gallery near Parque Poblado — inventive cocktails and shareable plates', instagram: 'https://www.instagram.com/alambiquemedellin/' },
        { name: 'Pergamino Café', note: 'The best specialty coffee in the city — a must-visit for coffee lovers, right in the heart of El Poblado' },
      ]
    },
    {
      label: 'Nightlife & Rooftop Bars',
      icon: '🌙',
      places: [
        { name: 'Provenza', note: 'El Poblado\'s trendiest strip — a walkable stretch of upscale bars, rooftop lounges, and late-night spots that draw both locals and visitors. This is the main area where all the bars are!', highlight: true },
        { name: 'Envy Rooftop', note: 'Sleek rooftop lounge with panoramic views of the Medellín skyline — a go-to spot for sundowners', instagram: 'https://www.instagram.com/envyrooftop1/' },
        { name: 'El Social', note: 'A stylish cocktail bar in El Poblado with craft drinks and a great atmosphere for a night out', instagram: 'https://www.instagram.com/elsocial1969/' },
        { name: 'Náufrago', note: 'Rooftop bar atop the Click Clack Hotel with 360° skyline views, coastal-inspired cocktails, and a laidback DJ vibe', instagram: 'https://www.instagram.com/naufrago_mde/' },
        { name: 'Belisario', note: 'Mexican-Colombian small plates and cocktails in a buzzing Provenza setting — great for a lively night out', instagram: 'https://www.instagram.com/belisario.mde/' },
        { name: 'Teatro Victoria', note: 'A theatrical, four-level nightclub in Provenza with a Broadway-style entrance and multiple dance floors', instagram: 'https://www.instagram.com/teatrovictoria.mde/' },
      ]
    },
    {
      label: 'See & Do',
      icon: '🗺',
      places: [
        { name: 'El Peñón de Guatapé', note: 'A massive 200m monolith about 1.5 hrs from Medellín — climb the 740 steps for breathtaking views of the reservoir, then explore the colorful streets of Guatapé town below' },
        { name: 'Comuna 13', note: 'Once one of the city\'s most dangerous neighborhoods, now a vibrant hub of street art, escalators, and hip-hop culture' },
        { name: 'Santa Fe de Antioquia', note: 'Charming colonial heritage town surrounded by mountains, about 1 hr away — a great day trip' },
        { name: 'Jardín Botánico', note: 'A beautiful botanical garden in the city center — great for a slow morning stroll' },
        { name: 'Centro Comercial Santa Fe', note: 'One of El Poblado\'s largest malls — shopping, dining, and a movie theater all in one place' },
        { name: 'El Tesoro', note: 'Upscale mall in El Poblado with high-end shops, restaurants, and panoramic city views from its terraces' },
        { name: 'Viva Envigado', note: 'A large, modern mall in Envigado with a wide mix of shops, restaurants, and entertainment' },
        { name: 'Metrocable & Parque Arví', note: 'Take the cable car above the city\'s hillside comunas and into a lush ecological reserve at the top' },
        { name: 'Plaza Botero & Museo de Antioquia', note: 'An open-air sculpture park with 23 iconic Botero statues right next to the museum housing the world\'s largest collection of his paintings and sculptures' },
        { name: 'Pueblito Paisa', note: 'A replica of a traditional Antioquian village perched on Cerro Nutibara with panoramic city views' },
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
