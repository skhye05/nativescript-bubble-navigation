import { NgModule, Directive } from "@angular/core";

@Directive({
    selector: "BubbleNavigation"
})
export declare class BubbleNavigationDirective {
}

@NgModule({
    declarations: [BubbleNavigationDirective],
    exports: [BubbleNavigationDirective],
})
export declare class BubbleNavigationModule {
}
