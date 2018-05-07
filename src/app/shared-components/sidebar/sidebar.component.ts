import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [`

  #menu{
    border-right: 1px solid lightgrey;
  }

  `]
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
