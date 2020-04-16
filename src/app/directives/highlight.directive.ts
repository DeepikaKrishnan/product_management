import { Directive, ElementRef, Renderer2, Input, OnInit, HostListener  } from '@angular/core';
import { cursorTo } from 'readline';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  @Input() defaultColor: string

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    if (this.defaultColor) {
      this.setBgColor(this.defaultColor)
    } else {
      this.setBgColor('white')
    }
  }

  setBgColor(color: string) {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'backgroundColor',
      color
    )
  }

  addPointer() {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'cursor',
      'pointer'
    )
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBgColor('yellow');
    this.addPointer();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBgColor(this.defaultColor);
  }

}
