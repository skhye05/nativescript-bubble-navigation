import { NgModule } from '@angular/core';
import { registerElement } from 'nativescript-angular/element-registry';

import { DIRECTIVES } from './bubble-navigation.directive';

@NgModule(
  {
    declarations: [DIRECTIVES],
    exports: [DIRECTIVES],
  }
)
export class NativescriptBubbleNavigationModule {}

registerElement('BubbleNavigation', () => require('../').BubbleNavigation);
registerElement('BubbleNavigationTab', () => require('../').BubbleNavigationTab);