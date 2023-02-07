import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { DtreeSeedComponent } from './project-details/dtree-seed/dtree-seed.component';
import { PicsOfUsComponent } from './project-details/pics-of-us/pics-of-us.component';
import { DreamloJsComponent } from './project-details/dreamlo.js/dreamlo.js.component';
import { WorkWithMeHereComponent } from './project-details/work-with-me-here/work-with-me-here.component';
import { TagMenuComponent } from './tag-menu/tag-menu.component';
import { TagComponent } from './shared/tag/tag.component';
import { HomeComponent } from './home/home.component';
import { ProjectListComponent } from './shared/project-list/project-list.component';
import { ProjectDetailsSectionComponent } from './project-details/project-details-section/project-details-section.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects', component: TagMenuComponent },
  { path: 'projects/tags/:tag', component: TagMenuComponent },
  { path: 'projects/dtree-seed', component: DtreeSeedComponent },
  { path: 'projects/picsofus', component: PicsOfUsComponent },
  { path: 'projects/dreamlo.js', component: DreamloJsComponent },
  { path: 'projects/work-with-me-here', component: WorkWithMeHereComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProjectDetailsComponent,
    DtreeSeedComponent,
    PicsOfUsComponent,
    DreamloJsComponent,
    WorkWithMeHereComponent,
    TagMenuComponent,
    TagComponent,
    HomeComponent,
    ProjectListComponent,
    ProjectDetailsSectionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
