import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-commonhome',
  templateUrl: './commonhome.component.html',
  styleUrls: ['./commonhome.component.css']
})
export class CommonhomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  toggle() {
    $('.sidebar, .content').toggleClass("open");
  }
}

