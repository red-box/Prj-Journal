import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss']
})
export class ProjectFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() closeFormEvent = new EventEmitter();

  closeForm() {
    this.closeFormEvent.emit();
  }
}
