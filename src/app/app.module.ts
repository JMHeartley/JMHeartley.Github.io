import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProjectComponent } from './project/project.component';
import { DtreeSeedComponent } from './project/dtree-seed/dtree-seed.component';

const appRoutes: Routes = [
  { path: '', component: DtreeSeedComponent },
  { path: 'dtree-seed', component: DtreeSeedComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProjectComponent,
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
