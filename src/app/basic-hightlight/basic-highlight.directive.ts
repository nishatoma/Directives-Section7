import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[appBasicHighlight]'
})
export class BasicHightlightDirective implements OnInit{
    // We can inject the element this directive sits on
    // into this directive.
    // To be able to use elementRef everywhere in the class we make it private
    constructor(private elementRef: ElementRef) {
    }

    ngOnInit() {
        // Accessing elements like this is not good practice, we should use different tools. 
        // We will use the renderer later. See how its done in the 'better highlight' directive.
        this.elementRef.nativeElement.style.backgroundColor = 'green';
        this.elementRef.nativeElement.style.color = 'white';
        this.elementRef.nativeElement.textContent = 'Whatever I typed in my BasicHightlightDirective class.'
    }
}