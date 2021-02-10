import { Component, OnInit } from '@angular/core';
import { url } from 'inspector';

@Component({
  selector: 'spa-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})


export class AboutComponent implements OnInit {
  mySource: string = 'assets/img/porto.jpg';
 


  constructor() { }

  ngOnInit(): void {
  }

}
