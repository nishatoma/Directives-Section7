import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';


// This is our first structural directive. 
@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  // The set turns unless into a method, in a way.
  // Now, basically, if the condition is not true,
  // This will create the container ref and host the
  // templateRef, if not, it will clear the view.
  // We also have to make sure that our property shares the selector
  // name, which is appUnless.
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }

  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
