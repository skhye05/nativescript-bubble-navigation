import { View } from 'tns-core-modules/ui/core/view';
import { EventData } from 'tns-core-modules/data/observable';
import { Property } from 'tns-core-modules/ui/core/properties';

/**
 * Event interface for tab selected event
 */
export declare interface OnTabSelectedEventData extends EventData {
  name: string;
  position: number;
}


export abstract class BubbleNavigationBase extends View {


  get tabs(): BubbleNavigationItemBase[] {
    return this._tabs;
  }

  constructor() {
    super();
    this._tabs = <BubbleNavigationItemBase[]>[];
  }

  /**
   * Get or set the Bottom Navigation tabs
   */
  protected _tabs: BubbleNavigationItemBase[];

  /**
   * Get or set the current selected tab index
   */
  public selectedTabIndex: number = 0;

  /**
   * Get or set the main background color
   */
  public mainBackgroundColor: string;

  /**
   * Method allowing to manually select a tab
   */
  public selectTab(index: number): void {
    if (index !== this.selectedTabIndex) {
      this.selectTabNative(index);
    }
  }

  public onTabSelected(index: number): void {
    let eventData: OnTabSelectedEventData = {
      eventName: 'tabSelected',
      object: this,
      position: index,
      name: this.tabs[index].title
    };

    this.notify(eventData);
  }

  protected abstract selectTabNative(index: number): void;
}

export const tabsProperty = new Property<BubbleNavigationBase, BubbleNavigationItemBase[]>(
  {
    name: 'tabs',
    equalityComparer: (a: any[], b: any[]) => !a && !b && a.length === b.length
  }
);

tabsProperty.register(BubbleNavigationBase);

export const tabBackgroundColorProperty = new Property<BubbleNavigationBase, string>(
  {
    name: 'tabBackgroundColor'
  }
);

tabBackgroundColorProperty.register(BubbleNavigationBase);

export const paddingProperty = new Property<BubbleNavigationBase, string>(
  {
    name: 'padding'
  }
);

paddingProperty.register(BubbleNavigationBase);

export const elevationProperty = new Property<BubbleNavigationBase, string>(
  {
    name: 'elevation'
  }
);

elevationProperty.register(BubbleNavigationBase);

export class BubbleNavigationItemBase extends View {

  index?: number;

  constructor(title: string, icon: string, colorActive?: string, colorInactive?: string) {
    super();
    this._title = title;
    this._icon = icon;
    if (colorActive) { this._colorActive = colorActive; }
    if (colorInactive) { this._colorInactive = colorInactive; }
    // if (parent) { this._parent = parent; }
  }

  // Tab Name
  private _title: string;

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  // Icon
  private _icon: string;

  get icon(): string {
    return this._icon;
  }

  set icon(value: string) {
    if (this.icon !== value) {
      this._icon = value;
    }
  }

  // Active
  private _colorActive: string;

  get colorActive(): string {
    return this._colorActive;
  }

  set colorActive(value: string) {
    if (this.colorActive !== value) {
      this._colorActive = value;
    }
  }

  // Inactive
  private _colorInactive: string;

  get colorInactive(): string {
    return this._colorInactive;
  }

  set colorInactive(value: string) {
    if (this.colorInactive !== value) {
      this._colorInactive = value;
    }
  }

  // private _parent?: WeakRef<BubbleNavigationBase>;

  // get parent(): WeakRef<BubbleNavigationBase> {
  //   return this._parent;
  // }

  // set parent(value: WeakRef<BubbleNavigationBase>) {
  //   if (this._parent !== value) {
  //     this._parent = value;
  //   }
  // }
}
