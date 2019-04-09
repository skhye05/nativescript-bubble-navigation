import * as observable from 'tns-core-modules/data/observable';
import * as pages from 'tns-core-modules/ui/page';
import { HelloWorldModel } from './main-view-model';
import { BubbleNavigation, OnTabSelectedEventData } from 'nativescript-bubble-navigation';
let vm = new HelloWorldModel();

// Event handler for Page 'loaded' event attached in main-page.xml
export function pageLoaded(args: observable.EventData) {
    // Get the event sender
    let page = <pages.Page>args.object;
    page.bindingContext = vm;
}

export function onBubbleNavigationLoaded(args) {
    let folding: BubbleNavigation = args.object;
    folding.on('tabSelected', tabSelected);
}

export function tabSelected(args: OnTabSelectedEventData) {
    vm.set('title', args.name.toUpperCase() + ' TAB!');
    vm.set('bg', vm.tabs[args.position].colorInactive);

    console.log('tab selected ' + args.name + ' at position ' + args.position);
}