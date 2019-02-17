import { Directive, Renderer2, OnInit, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  // This time instead of accessing the nativeElement using dom we will
  // use the renderer instead.
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { 

  }

  ngOnInit() {
    // This way is better practice with using the renderer to access
    // elements and change their style/content.
    // Why is this the better approach? Angular is not just in the browser,
    // it also works with service workers, where we might not have access to the dom
    // if you try to change the dom in these circumstances, you will get an error.

    // this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'blue');
    // this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white');
  }

  // This will trigger, whenever some event occurs. The event
  // is specified as an argument as a string in the HostListener
  // method. 'mouseenter' is one of the supported events
  @HostListener('mouseenter') mouseOver(eventData: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'blue');
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white');
  }

  // Another listener we can add here is for when the mouse is no longer hovering.
  // 'mouseleave' is another event supported by Angular.
  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'white');
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'black');
  }

}
