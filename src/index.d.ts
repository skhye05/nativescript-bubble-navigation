import { EventData } from 'tns-core-modules/data/observable';
import { AddChildFromBuilder, View } from 'tns-core-modules/ui/core/view';

export declare interface OnTabSelectedEventData extends EventData {
  name: string;
  position: number;
}

export declare abstract class BubbleNavigationBase extends View {

  public tabs: BubbleNavigationItemBase[];

  public mainBackgroundColor: string;

  public selectedTabIndex: number;

  public selectTab(index: number): void;

  protected abstract selectTabNative(index: number): void;
}

export declare class BubbleNavigationItemBase {

  public title: string;

  public icon: string;

  public colorActive: string;

  public colorInactive: string;

  parent: WeakRef<BubbleNavigationBase>;

  constructor(title: string, icon: string, colorActive?: string, colorInactive?: string, parent?: WeakRef<BubbleNavigationBase>);
}

export declare class BubbleNavigation extends BubbleNavigationBase {

  private _delegate;

  constructor();

  public bindTabs(tabs: BubbleNavigation[]): void;

  protected selectTabNative(index: number): void;
}

export declare class BubbleNavigationItem extends BubbleNavigationItemBase {
  constructor(title: string, icon: string, colorActive?: string, colorInactive?: string, parent?: WeakRef<BubbleNavigationBase>);
}