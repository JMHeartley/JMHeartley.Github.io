import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { DtreeSeedComponent } from 'src/app/project-details/dtree-seed/dtree-seed.component';
import { PicsOfUsComponent } from 'src/app/project-details/pics-of-us/pics-of-us.component';
import { DreamloJsComponent } from 'src/app/project-details/dreamlo.js/dreamlo.js.component';
import { WorkWithMeHereComponent } from 'src/app/project-details/work-with-me-here/work-with-me-here.component';
import { Project } from "../shared/project.model";

@Component({
  selector: 'app-tag-menu',
  templateUrl: './tag-menu.component.html'
})
export class TagMenuComponent implements OnInit, OnDestroy {
  tag: string;
  allProjects: Project[] = [
    new DtreeSeedComponent,
    new PicsOfUsComponent,
    new DreamloJsComponent,
    new WorkWithMeHereComponent
  ];
  paramsSubscribtion: any;
  projectsWithMatchingTag: Project[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.paramsSubscribtion = this.route.params.subscribe(params => {
      this.tag = params['tag'];
    });
    this.showProjectsWithMatchingTag();
  }

  ngOnDestroy() {
    this.paramsSubscribtion.unsubscribe();
  }

  showProjectsWithMatchingTag() {
    this.projectsWithMatchingTag = this.allProjects.filter(project => {
      return project.tags.includes(this.tag);
    });
  }
}