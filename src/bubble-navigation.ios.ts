import { BubbleNavigationBase, BubbleNavigationItemBase, tabsProperty, tabBackgroundColorProperty } from "./bubble-navigation.common";
import { textProperty, Color } from "tns-core-modules/ui/text-base/text-base";
import { ImageSource, fromFileOrResource } from "tns-core-modules/image-source/image-source";
import { isFileOrResourcePath } from "tns-core-modules/utils/utils";

export class BottomBarControllerDelegate extends NSObject implements UITabBarControllerDelegate {
    public static ObjCProtocols = [UITabBarControllerDelegate];

    private _owner: WeakRef<BubbleNavigation>;

    public static initWithOwner(owner: WeakRef<BubbleNavigation>): BottomBarControllerDelegate {
        const delegate = <BottomBarControllerDelegate>BottomBarControllerDelegate.new();
        delegate._owner = owner;
        return delegate;
    }

    tabBarControllerDidSelectViewController(tabBarController: UITabBarController, viewController: UIViewController) {
        const owner = this._owner.get();
        owner.onTabSelected(tabBarController.selectedIndex);
    }
}

export class BubbleNavigation extends BubbleNavigationBase {

    public _tabBarController: BubbleTabBarController;
    private _delegate: BottomBarControllerDelegate;

    nativeView: any;

    get ios(): any {
        return this.nativeView;
    }

    public createNativeView(): Object {
        this._tabBarController = BubbleTabBarController.new();
        console.log('dddd');
        return this._tabBarController;
    }

    /**
     * Initializes properties/listeners of the native view.
     */
    initNativeView(): void {
        (<any>this.nativeView).owner = this;
        super.initNativeView();
        // this._delegate = this._tabBarController.delegate = BottomBarControllerDelegate.initWithOwner(new WeakRef(this));
    }

    disposeNativeView(): void {
        // Remove reference from native listener to this instance.
        (<any>this.nativeView).owner = null;

        super.disposeNativeView();
    }


    bindTabs(tabs: BubbleNavigationItem[]) {
        if (!this.tabs) { this.tabs = tabs; }
        let count = 0;

        const items = [];
        for (let tab of tabs) {
            const itemViewController: UIViewController = UIViewController.new();
            // UIImage.imageNamed(options.icon),
            const icon = fromFileOrResource(tab.icon).ios;
            let item: CBTabBarItem = CBTabBarItem.alloc().initWithTitleImageTag(tab.title, icon, 0);

            if (tab.colorActive) {
                item.tintColor = new Color(tab.colorActive).ios;
            }

            if (tab.colorInactive) {

            }

            itemViewController.tabBarItem = item;

            items.push(itemViewController);
            count++;
        }

        this._tabBarController.viewControllers = (NSArray as any).arrayWithArray(
            items.map(item => item)
        );

        rootVC().navigationController.pushViewControllerAnimated(this._tabBarController, true);
    }

    protected selectTabNative(index: number): void {
        this._tabBarController.selectedIndex = index;
    }

    // Tabs Property
    [tabsProperty.getDefault](): BubbleNavigationItem[] {
        return null;
    }

    [tabsProperty.setNative](value: BubbleNavigationItem[]) {
        this.bindTabs(value);
    }

    // Main Color
    [tabBackgroundColorProperty.getDefault](): string {
        return null;
    }

    [tabBackgroundColorProperty.setNative](color: string) {
        this.nativeView.tabBar.barTintColor = new Color(color).ios;
    }
}

export class BubbleNavigationItem extends BubbleNavigationItemBase {
    constructor(title: string, icon: string, colorActive?: string, colorInactive?: string, parent?: WeakRef<BubbleNavigationBase>) {
        super(title, icon, colorActive, colorInactive, parent);
    }
}


const rootVC = function () {
    let appwindow = UIApplication.sharedApplication.keyWindow;
    return appwindow.rootViewController;
};