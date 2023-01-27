import { Component } from '@angular/core';
import { Project } from "src/app/shared/project.model";

@Component({
  selector: 'app-dreamlo.js',
  templateUrl: './dreamlo.js.component.html'
})
export class DreamloJsComponent implements Project {
  bannerFilePath: string = 'assets/img/dreamlo.js/main.png';
  description: string = 'A Javascript library for creating, retrieving, updating, and deleting scores on your dreamlo leaderboard via its web API.';
  bannerAltText: string = 'dreamlo.js and dreamlo UI logos';
  tags: string[] = ['open-source', 'library', 'typescript', 'javascript', 'html', 'css', 'bootstrap'];
}
