import { Observable } from 'tns-core-modules/data/observable';
import { BubbleNavigation, BubbleNavigationItem } from 'nativescript-bubble-navigation';

export class HelloWorldModel extends Observable {
  public title: string = 'HOME TAB';
  public bg: string = '#e57373';
  public tabs: BubbleNavigationItem[];

  constructor() {
    super();

    this.tabs = [
      new BubbleNavigationItem('Home', 'ic_home', '#f44336', '#e57373'),
      new BubbleNavigationItem('Search', 'ic_search', '#03a9f4', '#64b5f6'),
      new BubbleNavigationItem('Likes', 'ic_like', '#607d8b', '#90a4ae'),
      new BubbleNavigationItem('Notify', 'ic_playlist', '#4caf50', '#81c784')
    ];
  }

  // public onTabSelected(index: number): void {
  //   console.log('position =>', this.tabs[index].title);
  //   this.title = this.tabs[index].title;
  // }
}