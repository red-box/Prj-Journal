import { FetchDataService } from './../fetch-data.service';
import { Component, Renderer2, ElementRef, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'project-navigation',
  templateUrl: './project-navigation.component.html',
  styleUrls: ['./project-navigation.component.scss']
})
export class ProjectNavigationComponent implements OnInit {

  constructor(private renderer: Renderer2, private el: ElementRef, private FetchDataService: FetchDataService) { }

  ngOnInit() {
    this.fetchProjects()
  }

  public toggle = false;
  data$;

  @Output() projectSelectEvent = new EventEmitter<Event>();

  searchToggle() {
    let input = document.getElementsByClassName("searchInputField");

    if (!this.toggle) {
      this.toggle = true;
      this.renderer.addClass(input[0], "inputActive");
    } else if (this.toggle) {

      console.log();
    }
  }
  toggleOff() {
    let input = document.getElementsByClassName("searchInputField");

    if (this.toggle) {
      this.toggle = false;
      this.renderer.removeClass(input[0], "inputActive");
    }
  }
  fetchProjects() {
    this.data$ = this.FetchDataService.fetchProjects();
  }
  projectSelect(data: Event): void {
    this.projectSelectEvent.emit(data);
  }
}
