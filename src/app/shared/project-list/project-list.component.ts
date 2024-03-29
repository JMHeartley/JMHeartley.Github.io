import { Component, Input, OnChanges, OnInit, AfterViewInit } from '@angular/core';
import { DtreeSeedComponent } from 'src/app/project-details/dtree-seed/dtree-seed.component';
import { PicsOfUsComponent } from 'src/app/project-details/pics-of-us/pics-of-us.component';
import { DreamloJsComponent } from 'src/app/project-details/dreamlo.js/dreamlo.js.component';
import { WorkWithMeHereComponent } from 'src/app/project-details/work-with-me-here/work-with-me-here.component';
import { Project } from "../project.model";
import { gsap } from 'gsap';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html'
})
export class ProjectListComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() timeline: gsap.core.Timeline;
  @Input() tagFilter: string;
  allProjects: Project[] = [
    new PicsOfUsComponent,
    new DtreeSeedComponent,
    new DreamloJsComponent,
    new WorkWithMeHereComponent
  ];
  projectsWithMatchingTag: Project[];

  ngOnInit() {
    this.showProjectsWithMatchingTag();
  }

  ngOnChanges() {
    this.showProjectsWithMatchingTag();
  }

  showProjectsWithMatchingTag() {
    if (!this.tagFilter) {
      this.projectsWithMatchingTag = this.allProjects;
      return;
    }

    this.projectsWithMatchingTag = this.allProjects.filter(project => {
      return project.tags.includes(this.tagFilter);
    });
  }
  ngAfterViewInit() {
    if (!this.timeline) {
      this.timeline = gsap.timeline();
    }

    this.timeline.from('.theme-card', {
      delay: 0.25,
      duration: 0.25,
      opacity: 0,
      stagger: 0.25,
      y: -20,
      scale: 0.5,
      ease: 'back.out(1.7)'
    });
  }
}
