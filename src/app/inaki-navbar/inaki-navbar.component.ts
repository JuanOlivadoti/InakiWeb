import { Component, OnInit } from '@angular/core';
import { AppBootstrapModule } from '../app-bootstrap/app-bootstrap.module';

@Component({
  selector: 'app-inaki-navbar',
  templateUrl: './inaki-navbar.component.html',
  styleUrls: ['./inaki-navbar.component.css']
})
export class InakiNavbarComponent implements OnInit {
  isCollapsed = false;
  constructor() { }

  ngOnInit() {
  }

}
