import { Component } from '@angular/core';
import { Project } from "src/app/shared/project.model";

@Component({
  selector: 'app-work-with-me-here',
  templateUrl: './work-with-me-here.component.html'
})
export class WorkWithMeHereComponent implements Project {
  bannerFilePath: string = 'assets/img/work-with-me-here/main.png';
  description: string = 'A web app for sharing photos with family and viewing family trees.';
  bannerAltText: string = 'Screenshot of the Work With Me Here main menu';
  tags: string[] = ['c#', 'unity', 'game', 'game-jam'];
}