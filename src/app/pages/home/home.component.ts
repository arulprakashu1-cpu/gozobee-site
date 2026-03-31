import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  threatsBlocked = 0;
  private counterInterval: any;
  private observer!: IntersectionObserver;

  ngAfterViewInit() {
    // Animate threat counter
    this.animateCounter();

    // Scroll-reveal observer
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-children')
      .forEach(el => this.observer.observe(el));
  }

  ngOnDestroy() {
    if (this.counterInterval) clearInterval(this.counterInterval);
    if (this.observer) this.observer.disconnect();
  }

  private animateCounter() {
    const target = 2147583;
    const increment = Math.ceil(target / 120);
    this.counterInterval = setInterval(() => {
      this.threatsBlocked += increment;
      if (this.threatsBlocked >= target) {
        this.threatsBlocked = target;
        clearInterval(this.counterInterval);
        // Keep incrementing slowly for "live" effect
        this.counterInterval = setInterval(() => {
          this.threatsBlocked += Math.floor(Math.random() * 10) + 1;
        }, 800);
      }
    }, 16);
  }
}
