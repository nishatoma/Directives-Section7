import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  // These values can be now overwritten from outside.
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';

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

    this.backgroundColor = this.defaultColor;
  }

  // This will trigger, whenever some event occurs. The event
  // is specified as an argument as a string in the HostListener
  // method. 'mouseenter' is one of the supported events
  @HostListener('mouseenter') mouseOver(eventData: Event) {
    // This one uses renderer
    // this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'blue');

    // We can use HostBinding below like so to make the background color blue.
    this.backgroundColor = this.highlightColor;
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white');
  }

  // Another listener we can add here is for when the mouse is no longer hovering.
  // 'mouseleave' is another event supported by Angular.
  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'white');

    // This one uses HostBinding
    this.backgroundColor = this.defaultColor;
    // This one uses renderer
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'black');
  }

  // Another way to change the background color is to user HostBinding
  // Which property of the hosting element we want to bind? style, value, etc 
  // What we are telling angular now is that 'on the element this directive sits,
  // please access the style property.'
  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;

}
