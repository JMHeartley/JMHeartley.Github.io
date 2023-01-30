import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { DtreeSeedComponent } from 'src/app/project-details/dtree-seed/dtree-seed.component';
import { PicsOfUsComponent } from 'src/app/project-details/pics-of-us/pics-of-us.component';
import { DreamloJsComponent } from 'src/app/project-details/dreamlo.js/dreamlo.js.component';
import { WorkWithMeHereComponent } from 'src/app/project-details/work-with-me-here/work-with-me-here.component';
import { Project } from "../project.model";

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html'
})
export class ProjectListComponent implements OnInit, OnChanges {
  @Input() tagFilter: string;
  allProjects: Project[] = [
    new DtreeSeedComponent,
    new PicsOfUsComponent,
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
}
