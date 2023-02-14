import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appVerticalParallax]'
})
export class VerticalParallaxDirective implements OnInit {

  @Input('appVerticalParallax') targetElement: HTMLDivElement;
  @Input() parallaxSpeed: number = 0.5;

  private initialObjectPosition: string[] = [];
  private initialYOffset: number = 0;

  constructor(private element: ElementRef) { }

  ngOnInit(): void {
    this.initialObjectPosition = getComputedStyle(this.element.nativeElement).getPropertyValue('object-position').split(' ');
    this.initialYOffset = parseInt(this.initialObjectPosition[1]);
    this.targetElement.addEventListener('scroll', this.onTargetScroll.bind(this));
  }

  onTargetScroll() {
    const scrollPosition = this.targetElement.scrollTop;
    const newObjectPositionY = this.initialYOffset + (scrollPosition * this.parallaxSpeed / window.innerHeight * 100);
    this.element.nativeElement.style.objectPosition = `${this.initialObjectPosition[0]} ${newObjectPositionY}%`;
    console.log(this.element.nativeElement.classList, this.element.nativeElement.style.objectPosition);
  }
}
