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
        { name: 'El Cielo ⭐', note: 'Michelin-recognized tasting menu by chef Juan Manuel Barrientos — a theatrical, multi-sensory Colombian fine dining experience' },
        { name: 'Carmen', note: 'One of Medellín\'s most acclaimed restaurants — refined Colombian farm-to-table cuisine in an elegant El Poblado setting' },
        { name: 'Herbario', note: 'Plant-forward fine dining atop the iconic Hotel Charlee with sweeping rooftop views over El Poblado' },
        { name: 'Bonuar', note: 'Stylish rooftop bar and restaurant with stunning panoramic views of the city — perfect for sunset drinks' },
        { name: 'La Mar', note: 'Gastón Acurio\'s celebrated cevichería bringing the best of Peruvian coastal cuisine to Medellín' },
        { name: 'Osso Carnicería', note: 'The city\'s most beloved steakhouse and charcuterie — exceptional cuts and a buzzing atmosphere' },
        { name: 'Oci.Mde', note: 'A local favorite for relaxed brunches and creative Colombian small plates in El Poblado' },
        { name: 'Mondongos', note: 'Iconic no-frills spot for traditional Antioquian food — the bandeja paisa here is legendary' },
        { name: 'Pergamino Café', note: 'The best specialty coffee in the city — a must-visit for coffee lovers, right in the heart of El Poblado' },
      ]
    },
    {
      label: 'See & Do',
      icon: '🗺',
      places: [
        { name: 'Plaza Botero & Museo de Antioquia', note: 'An open-air sculpture park with 23 iconic Botero statues right next to the museum housing the world\'s largest collection of his paintings and sculptures' },
        { name: 'Metrocable & Parque Arví', note: 'Take the cable car above the city\'s hillside comunas and into a lush ecological reserve at the top' },
        { name: 'Comuna 13', note: 'Once one of the city\'s most dangerous neighborhoods, now a vibrant hub of street art, escalators, and hip-hop culture' },
        { name: 'El Peñón de Guatapé', note: 'A massive 200m monolith about 1.5 hrs from Medellín — climb the 740 steps for breathtaking views of the reservoir, then explore the colorful streets of Guatapé town below' },
        { name: 'Jardín Botánico', note: 'A beautiful botanical garden in the city center — great for a slow morning stroll' },
        { name: 'Pueblito Paisa', note: 'A replica of a traditional Antioquian village perched on Cerro Nutibara with panoramic city views' },
        { name: 'El Centro Histórico', note: 'Explore Plaza de Cisneros, Parque de las Luces, and the bustling energy of downtown Medellín' },
        { name: 'Santa Fe de Antioquia', note: 'Charming colonial heritage town surrounded by mountains, about 1 hr away' },
        { name: 'Jardín', note: 'A postcard-perfect coffee town in the Andes, 3 hrs south — worth the drive' },
      ]
    },
    {
      label: 'Nightlife & Rooftop Bars',
      icon: '🌙',
      places: [
        { name: 'Bonuar', note: 'One of the most popular rooftop bars in El Poblado — great cocktails, stunning city views, and a lively crowd' },
        { name: 'Envy Rooftop', note: 'Sleek rooftop lounge with panoramic views of the Medellín skyline — a go-to spot for sundowners' },
        { name: 'Vintrash', note: 'An eclectic, vintage-themed bar beloved by locals — unpretentious, fun, and always buzzing' },
        { name: 'El Social', note: 'A stylish cocktail bar in El Poblado with craft drinks and a great atmosphere for a night out' },
        { name: 'Calle 9+1', note: 'The heart of Medellín\'s nightlife strip — lined with bars and clubs, this is where the night comes alive in El Poblado' },
        { name: 'Provenza', note: 'El Poblado\'s trendiest strip — a walkable stretch of upscale bars, rooftop lounges, and late-night spots that draw both locals and visitors' },
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
