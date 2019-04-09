import { Observable } from 'tns-core-modules/data/observable';
import { BubbleNavigation } from 'nativescript-bubble-navigation';

export class HelloWorldModel extends Observable {
  public message: string;
  private bubbleNavigation: BubbleNavigation;

  constructor() {
    super();

    this.bubbleNavigation = new BubbleNavigation();
    this.message = this.bubbleNavigation.message;
  }
}
