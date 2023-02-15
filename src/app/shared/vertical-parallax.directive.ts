import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appVerticalParallax]'
})
export class VerticalParallaxDirective implements OnInit {

  @Input('appVerticalParallax') targetElement: HTMLDivElement;
  @Input() parallaxSpeed: number = 0.5;

  private initialYPosition: number = 0;

  constructor(private attachedElement: ElementRef) { }

  ngOnInit(): void {
    const initialPosition = getComputedStyle(this.attachedElement.nativeElement).getPropertyValue('background-position').split(' ');
    this.initialYPosition = parseInt(initialPosition[1]);
    this.targetElement.addEventListener('scroll', this.onTargetScroll.bind(this));
  }

  onTargetScroll() {
    const scrollPosition = this.targetElement.scrollTop;
    const parallaxIncrementPercentage = this.parallaxSpeed / this.targetElement.scrollHeight * 100;
    const newObjectPositionY = this.initialYPosition + (scrollPosition * parallaxIncrementPercentage);
    this.attachedElement.nativeElement.style.backgroundPositionY = `${newObjectPositionY}%`;
  }
}
