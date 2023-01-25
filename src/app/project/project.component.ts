import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html'
})
export class ProjectComponent {
  @Input() imageSrc: string = "";
  @Input() imageAlt: string = "";
  @Input() tags: string[] = [];
  @Input() githubUrl: string = "";
  @Input() npmUrl: string = "";
  @Input() demoUrl: string = "";
}
