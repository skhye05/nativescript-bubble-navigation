import { NgModule, Directive } from "@angular/core";
import { registerElement } from "nativescript-angular/element-registry";

@Directive({
    selector: "BubbleNavigation"
})
export class BubbleNavigationDirective { }

@NgModule({
    declarations: [BubbleNavigationDirective],
    exports: [BubbleNavigationDirective],
})
export class BubbleNavigationModule { }

registerElement("BubbleNavigation", () => require("../").BubbleNavigation);