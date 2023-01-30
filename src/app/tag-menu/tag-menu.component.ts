import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-tag-menu',
  templateUrl: './tag-menu.component.html'
})
export class TagMenuComponent implements OnInit, OnDestroy {
  tag: string;
  paramsSubscribtion: Subscription;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.paramsSubscribtion = this.route.params.subscribe(params => {
      this.tag = params['tag'];
    });
  }

  ngOnDestroy() {
    this.paramsSubscribtion.unsubscribe();
  }
}