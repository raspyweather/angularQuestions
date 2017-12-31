/*import { Directive, ElementRef, Input } from '@angular/core';
import "mathjax";

@Directive({
    selector: '[MathJax]'
})
export class MathJaxDirective {
    //grab attribute
    @Input('MathJax') input: string;
    // temp string for interpolation
    private oldText: string;
    // interpolation time
    private delay = 150;
    // timeoutID of the interpolation timer
    private timeoutId: number;

    constructor(private el: ElementRef) {
        MathJax.Hub.Config({
            showProcessingMessages: true,
            tex2jax: { inlineMath: [['$', '$'], ['\\(', '\\)']] }
        });
        this.oldText = "";
    }

    ngOnChanges() {
        console.log("ngonchange");
        if (this.oldText === this.input) { return; }
        this.oldText = this.input;
        if (this.timeoutId) {
            window.clearTimeout(this.timeoutId);
        }
        this.timeoutId = window.setTimeout(() => this.internalUpdate(), this.delay);
    }
    internalUpdate() {
        console.log("internal update", this.el, this.oldText)
        // update the shown values
        this.el.nativeElement.innerHTML = this.oldText;
        // start rendering query
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, this.el.nativeElement]);
    }
}*/
declare var MathJax;

import { Directive, ElementRef, Input } from '@angular/core';
@Directive({
    selector: '[MathJax]'
})
export class MathJaxDirective {
    @Input(' MathJax')
    texExpression: string;
    constructor(private el: ElementRef) {
    }

    ngOnChanges() {
        this.el.nativeElement.innerHTML = this.texExpression;
        //  MathJax.Callback(this.el.nativeElement);
        MathJax.Hub.Typeset(this.el.nativeElement, () => { });
        //MathJax.Hub.Process(["Typeset", MathJax.Hub, this.el.nativeElement]);
    }
}