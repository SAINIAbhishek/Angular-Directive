import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicAttributeDirective]'
})
export class BasicAttributeDirectiveDirective implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit(){
    this.elementRef.nativeElement.style.backgroundColor = "orange";
    this.elementRef.nativeElement.style.color = "white";
    this.elementRef.nativeElement.style.padding = "10px";
  }

}
