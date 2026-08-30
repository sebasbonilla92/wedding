import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presents',
  templateUrl: './presents.component.html',
  styleUrls: ['./presents.component.css']
})
export class PresentsComponent implements OnInit {
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
