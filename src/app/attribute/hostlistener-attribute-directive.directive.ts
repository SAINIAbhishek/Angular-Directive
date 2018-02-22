import { Directive, Renderer2, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHostlistenerAttributeDirective]'
})
export class HostlistenerAttributeDirectiveDirective{

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') mouseenter(eventData: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'green');
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white');
    this.renderer.setStyle(this.elementRef.nativeElement, 'padding', '10px');
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'white');
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', '');
    this.renderer.setStyle(this.elementRef.nativeElement, 'padding', '');
  }

}
