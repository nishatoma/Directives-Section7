import { Directive, Renderer2, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

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
    this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'blue');
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white');
  }

}
