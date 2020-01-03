import { Component, OnInit, Renderer2, ElementRef, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'menu-navigation',
  templateUrl: './menu-navigation.component.html',
  styleUrls: ['./menu-navigation.component.scss']
})
export class MenuNavigationComponent implements OnInit {

  constructor(private renderer: Renderer2, private el: ElementRef, private ref: ChangeDetectorRef) { }
  ngOnInit() { }

  @Output() addFormToggleEvent = new EventEmitter<Event>();


  public toggle = false;
  addToggle;


  mobileMenu() {
    let top = document.getElementsByClassName("bmTop");
    let mid = document.getElementsByClassName("bmMid");
    let bot = document.getElementsByClassName("bmBot");

    if (!this.toggle) {
      this.toggle = true;
      this.renderer.addClass(top[0], "bmTopActive");
      this.renderer.addClass(mid[0], "bmMidActive");
      this.renderer.addClass(bot[0], "bmBotActive");

    } else if (this.toggle) {
      this.toggle = false;
      this.renderer.removeClass(top[0], "bmTopActive");
      this.renderer.removeClass(mid[0], "bmMidActive");
      this.renderer.removeClass(bot[0], "bmBotActive");

    }
  }
  addFormIconToggle() {
    this.addToggle = !this.addToggle;

    let vert = document.getElementsByClassName("vertical");
    let horz = document.getElementsByClassName("horizontal");

    if (this.addToggle) {

      this.renderer.addClass(vert[0], "verticalToggle");
      this.renderer.addClass(horz[0], "horizontalToggle");
    }
    else if (!this.addToggle) {
      this.renderer.removeClass(vert[0], "verticalToggle");
      this.renderer.removeClass(horz[0], "horizontalToggle");
    }

  }

  addFormToggle() {
    this.addFormToggleEvent.emit();
    this.addFormIconToggle();
  }
}
