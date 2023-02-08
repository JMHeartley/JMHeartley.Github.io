import { Component } from '@angular/core';
import { Project } from "src/app/shared/project.model";

@Component({
  selector: 'app-dreamlo.js',
  templateUrl: './dreamlo.js.component.html'
})
export class DreamloJsComponent implements Project {
  absoluteUrl = '/projects/dreamlo.js';
  bannerFilePath = 'assets/img/dreamlo.js/main.png';
  bannerAltText = 'dreamlo.js and dreamlo UI logos';
  description = 'A library for creating, retrieving, updating, and deleting scores on your dreamlo leaderboard via its web API.';
  tags: string[] = ['open-source', 'library', 'typescript', 'javascript', 'api', 'html', 'css', 'bootstrap'];
}
