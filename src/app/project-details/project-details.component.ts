import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent {
  @Input() imageSrc: string;
  @Input() imageAlt: string;
  @Input() tags: string[];
  @Input() githubUrl: string;
  @Input() npmUrl: string;
  @Input() demoUrl: string;
}
