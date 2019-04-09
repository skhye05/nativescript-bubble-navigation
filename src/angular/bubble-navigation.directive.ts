import { Directive } from '@angular/core';

@Directive({
    selector: 'BubbleNavigation'
})
export class BubbleNavigationDirective { }

@Directive({
    selector: 'BubbleNavigationTab'
})
export class BubbleNavigationTabDirective { }

export const DIRECTIVES = [BubbleNavigationDirective, BubbleNavigationTabDirective];