import { Directive, ElementRef, Input } from '@angular/core';
@Directive({
    selector: '[focusing]'
})
export class focusingDirective {
    private caller: any;
    constructor(private el: ElementRef) {
        // check if element supports focus
        //  console.log(el, this.el);
        if (el.nativeElement) {
            el.nativeElement.focused = false;
            if (!el.nativeElement.getAttribute("tabIndex")) {
                el.nativeElement.setAttribute("tabIndex", 0);
            }
            this.caller = (k) => this.keydownHandler(k);
            el.nativeElement.onfocus = () => {
                document.addEventListener("keypress", this.caller);
                el.nativeElement.focused = true;
            };
            el.nativeElement.onblur = () => {
                document.removeEventListener("keypress", this.caller);
                el.nativeElement.focused = false;
            };
        }
        else {
            console.error("Element is not focusable", el, el.nativeElement);
            throw new DOMException();
        }
    }
    keydownHandler(eKey: KeyboardEvent) {
        // if enter
        if (eKey.keyCode == 13 || eKey.keyCode == 32) {
            console.log("click simulated");
            if (this.el && this.el.nativeElement) {
                this.el.nativeElement.click();
            }
            else console.log("el or nativeel not defined");
        }
    }
}