import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { DtreeSeedComponent } from './project-details/dtree-seed/dtree-seed.component';

const appRoutes: Routes = [
  { path: '', component: DtreeSeedComponent },
  { path: 'dtree-seed', component: DtreeSeedComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProjectDetailsComponent,
    DtreeSeedComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
