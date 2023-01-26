import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { DtreeSeedComponent } from './project-details/dtree-seed/dtree-seed.component';
import { PicsOfUsComponent } from './project-details/pics-of-us/pics-of-us.component';
import { DreamloJsComponent } from './project-details/dreamlo.js/dreamlo.js.component';

const appRoutes: Routes = [
  { path: '', component: DreamloJsComponent },
  { path: 'dtree-seed', component: DtreeSeedComponent },
  { path: 'picsofus', component: PicsOfUsComponent },
  { path: 'dreamlo.js', component: DreamloJsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProjectDetailsComponent,
    DtreeSeedComponent,
    PicsOfUsComponent,
    DreamloJsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
