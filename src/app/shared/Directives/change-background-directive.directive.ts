import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeBackgroundDirective]' //nom du directive
})
export class ChangeBackgroundDirectiveDirective {

  constructor(private el:ElementRef) { }
  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = '';
  }


}
