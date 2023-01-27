import { Component } from '@angular/core';
import { Project } from "src/app/shared/project.model";

@Component({
  selector: 'app-dtree-seed',
  templateUrl: './dtree-seed.component.html'
})
export class DtreeSeedComponent implements Project {
  bannerFilePath: string = 'assets/img/dtree-seed/main.png';
  bannerAltText: string = 'dTree-Seed logo';
  description: string = 'A library for converting a list of objects into a hierarchical data structure for dTree.';
  tags: string[] = ['open-source', 'library', 'typescript', 'javascript', 'tdd', 'mocha', 'chai'];
}
