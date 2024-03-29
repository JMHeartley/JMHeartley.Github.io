import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-details-section',
  templateUrl: './project-details-section.component.html'
})
export class ProjectDetailsSectionComponent {
  @Input() headerText: string;
  @Input() images: { src: string, alt: string; caption?: string; }[];
}
