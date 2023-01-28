import { Component } from '@angular/core';
import { Project } from "src/app/shared/project.model";

@Component({
  selector: 'app-pics-of-us',
  templateUrl: './pics-of-us.component.html'
})
export class PicsOfUsComponent implements Project {
  absoluteUrl = '/picsofus';
  bannerFilePath = 'assets/img/picsofus/main.png';
  bannerAltText = 'PicsOfUs logo';
  description = 'A web app for sharing photos with family and viewing family trees.';
  tags: string[] = ['web-app', 'c#', 'blazor', 'razor-pages', 'html', 'css', 'bootstrap', 'javascript', 'ef-core', 'microsoft-azure', 'tdd', 'xunit', 'moq', 'sqlite'];
}
