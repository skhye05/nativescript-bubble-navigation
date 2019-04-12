import { NgModule } from '@angular/core';

import { registerElement } from 'nativescript-angular/element-registry';
registerElement('BubbleNavigation', () => require('../').BubbleNavigation);

import { BubbleNavigationDirective } from './bubble-navigation.directive';

@NgModule({
    declarations: [BubbleNavigationDirective],
    exports: [BubbleNavigationDirective],
})
export class BubbleNavigationModule { }