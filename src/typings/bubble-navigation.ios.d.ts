
declare class BubbleTabBar extends UITabBar {

    static alloc(): BubbleTabBar; // inherited from NSObject

    static appearance(): BubbleTabBar; // inherited from UIAppearance

    static appearanceForTraitCollection(trait: UITraitCollection): BubbleTabBar; // inherited from UIAppearance

    static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): BubbleTabBar; // inherited from UIAppearance

    static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): BubbleTabBar; // inherited from UIAppearance

    static appearanceWhenContainedIn(ContainerClass: typeof NSObject): BubbleTabBar; // inherited from UIAppearance

    static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): BubbleTabBar; // inherited from UIAppearance

    static new(): BubbleTabBar; // inherited from NSObject
}

declare class BubbleTabBarController extends UITabBarController {

    static alloc(): BubbleTabBarController; // inherited from NSObject

    static new(): BubbleTabBarController; // inherited from NSObject
}

declare class CBTabBarButton extends UIControl {

    static alloc(): CBTabBarButton; // inherited from NSObject

    static appearance(): CBTabBarButton; // inherited from UIAppearance

    static appearanceForTraitCollection(trait: UITraitCollection): CBTabBarButton; // inherited from UIAppearance

    static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): CBTabBarButton; // inherited from UIAppearance

    static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): CBTabBarButton; // inherited from UIAppearance

    static appearanceWhenContainedIn(ContainerClass: typeof NSObject): CBTabBarButton; // inherited from UIAppearance

    static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): CBTabBarButton; // inherited from UIAppearance

    static new(): CBTabBarButton; // inherited from NSObject
}

declare class CBTabBarItem extends UITabBarItem {

    static alloc(): CBTabBarItem; // inherited from NSObject

    static appearance(): CBTabBarItem; // inherited from UIAppearance

    static appearanceForTraitCollection(trait: UITraitCollection): CBTabBarItem; // inherited from UIAppearance

    static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): CBTabBarItem; // inherited from UIAppearance

    static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): CBTabBarItem; // inherited from UIAppearance

    static appearanceWhenContainedIn(ContainerClass: typeof NSObject): CBTabBarItem; // inherited from UIAppearance

    static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): CBTabBarItem; // inherited from UIAppearance

    static new(): CBTabBarItem; // inherited from NSObject

    tintColor: UIColor;
}
