import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appColorChange]'
})
export class ColorChangeDirective {
  @HostBinding('style.color') color: any;
  constructor() { }
  @HostListener('mouseenter') mouseenter() {
    this.color = 'blue';
  }
  @HostListener('mouseleave') mouseleave(){
    this.color='green'
  }
  @HostListener('keyup') keyup(){
    this.color='red'
  }

}

