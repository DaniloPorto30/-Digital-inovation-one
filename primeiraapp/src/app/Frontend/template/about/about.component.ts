import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'spa-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  mySource: string = 'assets/img/porto1.jpg';

  panelOpenState = false;
  constructor() {}

  ngOnInit(): void {}
}
