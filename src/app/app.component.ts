import { MenuNavigationComponent } from './menu-navigation/menu-navigation.component';

import { Component, Input, ViewChild } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'journal';
  toggleForm;

  public clickedProject: Event;
  public toggleProjectForm: Event;

  @Input() event: Event;
  @ViewChild(MenuNavigationComponent, { static: false }) child: MenuNavigationComponent;

  constructor() { }

  childProjectSelect(data: Event) {
    this.clickedProject = data;
  }

  childAddFormToggle() {
    this.toggleForm = !this.toggleForm;
    this.child.addFormIconToggle();
  }
}

