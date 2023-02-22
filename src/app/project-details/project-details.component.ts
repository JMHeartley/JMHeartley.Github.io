import { AfterViewInit, Component, Input } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements AfterViewInit {
  @Input() imageSrc: string;
  @Input() imageAlt: string;
  @Input() tags: string[];
  @Input() githubUrl: string;
  @Input() npmUrl: string;
  @Input() demoUrl: string;

  ngAfterViewInit(): void {
    gsap.from('#gutter-image-top', { delay: 0.15, duration: 0.5, ease: 'power2.out', backgroundPositionY: -500 });
    gsap.from('#gutter-image-bottom', { delay: 0.15, duration: 0.5, ease: 'power2.out', backgroundPositionY: 500 });
    gsap.from('#gutter-image-left', { delay: 0.15, duration: 0.5, ease: 'power2.out', backgroundPositionX: -500 });
    gsap.from('#gutter-image-right', { delay: 0.15, duration: 0.5, ease: 'power2.out', backgroundPositionX: 500 });
    gsap.from('app-project-details-section', {
      delay: 0.25,
      duration: 0.25,
      opacity: 0,
      stagger: 0.25,
      ease: 'power2.out'
    });
  }
}
