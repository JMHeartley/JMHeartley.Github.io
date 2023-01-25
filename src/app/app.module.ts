import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProjectComponent } from './project/project.component';
import { DtreeSeedComponent } from './project/dtree-seed/dtree-seed.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProjectComponent,
    DtreeSeedComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
