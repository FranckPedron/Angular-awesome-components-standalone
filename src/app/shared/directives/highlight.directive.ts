import {AfterViewInit, Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[highlight]',
  standalone: true
})
export class HighlightDirective implements AfterViewInit{

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @Input()
  color = 'yellow';

  ngAfterViewInit() {
    this.setBackgroundColor(this.color);
  }

  setBackgroundColor(color: string) {
    this.renderer.setStyle(this.el, 'backgroundColor', color);
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.setBackgroundColor('lightgreen');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.setBackgroundColor(this.color);
  }

  @HostListener('click')
  onClick() {
    this.color = 'lightgreen';
  }
}
