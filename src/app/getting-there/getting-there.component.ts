import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-getting-there',
  standalone: true,
  imports: [],
  templateUrl: './getting-there.component.html',
  styleUrl: './getting-there.component.css'
})
export class GettingThereComponent implements OnInit {

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