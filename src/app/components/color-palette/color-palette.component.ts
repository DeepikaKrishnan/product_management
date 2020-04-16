import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-palette',
  templateUrl: './color-palette.component.html',
  styleUrls: ['./color-palette.component.scss']
})
export class ColorPaletteComponent implements OnInit {
  numArray = [];
  previeColor: any;
  brightArray = [0,0.1,0.2, 0.3, 0.4, 0.5, 0.6, 0.7,0.8,0.9,1];

  constructor() { }

  ngOnInit(): void {
    this.getNumber();
  }

  getNumber() {
    for(let i=0; i<360; i++) {
      this.numArray.push(i);
    }
  }

  getDegree(num) {
     return 'hue-rotate(' +num+ 'deg)';
  }
  getBrightness(num) {
    return 'brightness(' +num+ ')';
 }
 click() {
  debugger;
 }

}
