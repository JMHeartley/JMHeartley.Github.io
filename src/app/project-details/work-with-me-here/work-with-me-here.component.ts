import { Component } from '@angular/core';
import { Project } from "src/app/shared/project.model";

@Component({
  selector: 'app-work-with-me-here',
  templateUrl: './work-with-me-here.component.html'
})
export class WorkWithMeHereComponent implements Project {
  absoluteUrl: string = '/work-with-me-here';
  bannerFilePath: string = 'assets/img/work-with-me-here/main.png';
  bannerAltText: string = 'Screenshot of the Work With Me Here main menu';
  description: string = 'A game where you try to keep up with your dog while working from home; takes place during the 2020 pandemic lockdown.';
  tags: string[] = ['c#', 'unity', 'game', 'game-jam'];
}