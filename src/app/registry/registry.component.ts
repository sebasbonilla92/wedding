import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.css']
})
export class RegistryComponent implements OnInit {
  registries = [
    {
      name: 'Amazon',
      description: 'From kitchen essentials to home decor, our Amazon registry has a wide selection of items for our new home together.',
      link: '#',
      icon: 'A'
    },
    {
      name: 'Target',
      description: 'Browse our Target registry for everyday essentials and beautiful home furnishings as we begin our life together.',
      link: '#',
      icon: 'T'
    },
    {
      name: 'Zola',
      description: 'Explore our Zola registry for curated gifts, experiences, and honeymoon contributions that will create lasting memories.',
      link: '#',
      icon: 'Z'
    }
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
