import { EventData } from 'tns-core-modules/data/observable';
import { AddChildFromBuilder, View } from 'tns-core-modules/ui/core/view';

export declare interface OnTabSelectedEventData extends EventData {
  name: string;
  position: number;
}

export declare abstract class BubbleNavigationBase extends View {
  readonly tabs: BubbleNavigationItemBase[];

  constructor();

  protected _tabs: BubbleNavigationItemBase[];

  selectedTabIndex: number;

  mainBackgroundColor: string;

  selectTab(index: number): void;

  onTabSelected(index: number): void;

  protected abstract selectTabNative(index: number): void;
}

export declare class BubbleNavigationItemBase extends View {

  public title: string;

  public icon: string;

  public colorActive: string;

  public colorInactive: string;

  constructor(title: string, icon: string, colorActive?: string, colorInactive?: string);
}

export declare class BubbleNavigation extends BubbleNavigationBase {

  private _delegate;

  constructor();
  
  public bindTabs(tabs: BubbleNavigation[]): void;

  protected selectTabNative(index: number): void;
}

export declare class BubbleNavigationItem extends BubbleNavigationItemBase {
  constructor(title: string, icon: string, colorActive?: string, colorInactive?: string);
}
