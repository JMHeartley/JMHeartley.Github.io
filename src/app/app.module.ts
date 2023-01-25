import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { DtreeSeedComponent } from './project-details/dtree-seed/dtree-seed.component';
import { PicsOfUsComponent } from './project-details/pics-of-us/pics-of-us.component';

const appRoutes: Routes = [
  { path: '', component: PicsOfUsComponent },
  { path: 'dtree-seed', component: DtreeSeedComponent },
  { path: 'picsofus', component: PicsOfUsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProjectDetailsComponent,
    DtreeSeedComponent,
    PicsOfUsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
