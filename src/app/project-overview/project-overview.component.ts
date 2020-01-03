
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'project-overview',
  templateUrl: './project-overview.component.html',
  styleUrls: ['./project-overview.component.scss']
})
export class ProjectOverviewComponent implements OnInit {

  @Input() event: Event;

  public childProjectComment: Event;

  constructor() { }

  ngOnInit() {
  }
}
