import { Component, OnInit } from "@angular/core";
import { OnTabSelectedEventData, BubbleNavigationItem } from 'nativescript-bubble-navigation';

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    public title: string = 'HOME TAB!';
    public bg: string = '#e57373';
    public tabs: BubbleNavigationItem[];

    constructor() {
        // Use the component constructor to inject providers.
        this.tabs = [
            new BubbleNavigationItem('Home', 'ic_home', '#f44336', '#e57373'),
            new BubbleNavigationItem('Search', 'ic_search', '#03a9f4', '#64b5f6'),
            new BubbleNavigationItem('Likes', 'ic_like', '#607d8b', '#90a4ae'),
            new BubbleNavigationItem('Notify', 'ic_playlist', '#4caf50', '#81c784')
        ];
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onBottomNavigationTabSelected(args: OnTabSelectedEventData): void {
        this.title = args.name.toUpperCase() + ' TAB!';
        this.bg = this.tabs[args.position].colorInactive;

        console.log('tab selected ' + args.name + ' at position ' + args.position);
    }
}
