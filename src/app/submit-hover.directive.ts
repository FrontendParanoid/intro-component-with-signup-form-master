import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSubmitHover]',
  standalone: true
})
export class SubmitHoverDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @HostListener("mouseenter") HoverAction()
  {
    this.renderer.setStyle(this.element.nativeElement, "background-color", "hsl(154, 59%, 65%)");
    this.renderer.setStyle(this.element.nativeElement, "transition", "1s");
  }
  @HostListener("mouseleave") MouseOff()
  {
    this.renderer.setStyle(this.element.nativeElement, "background-color", "hsl(154, 59%, 50%)");
    this.renderer.setStyle(this.element.nativeElement, "transition", "1s");
  }
}
