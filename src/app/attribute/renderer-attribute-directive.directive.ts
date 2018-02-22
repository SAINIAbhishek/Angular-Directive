import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRendererAttributeDirective]'
})
export class RendererAttributeDirectiveDirective implements OnInit {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white');
    this.renderer.setStyle(this.elementRef.nativeElement, 'padding', '10px');
  }
}
