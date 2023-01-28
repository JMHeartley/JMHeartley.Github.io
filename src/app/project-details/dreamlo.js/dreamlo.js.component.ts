import { Component } from '@angular/core';
import { Project } from "src/app/shared/project.model";

@Component({
  selector: 'app-dreamlo.js',
  templateUrl: './dreamlo.js.component.html'
})
export class DreamloJsComponent implements Project {
  absoluteUrl: string = '/dreamlo.js';
  bannerFilePath: string = 'assets/img/dreamlo.js/main.png';
  bannerAltText: string = 'dreamlo.js and dreamlo UI logos';
  description: string = 'A library for creating, retrieving, updating, and deleting scores on your dreamlo leaderboard via its web API.';
  tags: string[] = ['open-source', 'library', 'typescript', 'javascript', 'html', 'css', 'bootstrap'];
}
