import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  timeline: gsap.core.Timeline;

  constructor() { }

  ngOnInit(): void {
    this.timeline = gsap.timeline()
      .from('#hi', { delay: 0.25, duration: 1, opacity: 0 })
      .from('#justin', { delay: 0.5, duration: 1, opacity: 0 })
      .from('#subtitle', { delay: 0.25, duration: 0.5, opacity: 0, y: -5 })
      .from('#check-out', { delay: 0.25, duration: 0.75, opacity: 0, scale: 2, ease: 'bounce.out' })
      .from('#arrow', { duration: 0.5, opacity: 0 })
      .from('#arrow', { duration: 0.75, repeat: -1, yoyo: true, y: -5, ease: 'sine.inOut' });
  }
}
