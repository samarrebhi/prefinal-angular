import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appBlocdirective]'
})
export class BlocdirectiveDirective {



  @HostBinding('style.color') color: any;
  constructor() { }
  @HostListener('mouseenter') mouseenter() {
    this.color = 'blue';
  }
  @HostListener('mouseleave') mouseleave(){
    this.color='grey'
  }
  @HostListener('keyup') keyup(){
    this.color='red'
  }
}
