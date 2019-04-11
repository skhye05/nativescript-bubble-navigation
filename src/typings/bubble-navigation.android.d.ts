declare namespace com {
 export namespace gauravk {
  export namespace bubblenavigation {
   export class BubbleNavigationConstraintView implements com.gauravk.bubblenavigation.IBubbleNavigation {
    public static class: java.lang.Class<com.gauravk.bubblenavigation.BubbleNavigationConstraintView>;
    public onClick(param0: globalAndroid.view.View): void;
    public setTypeface(param0: globalAndroid.graphics.Typeface): void;
    public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
    public onSaveInstanceState(): globalAndroid.os.Parcelable;
    public constructor(param0: globalAndroid.content.Context);
    public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
    public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
    public setBadgeValue(param0: number, param1: string): void;
    public setNavigationChangeListener(param0: com.gauravk.bubblenavigation.listener.BubbleNavigationChangeListener): void;
    public getCurrentActiveItemPosition(): number;
    public setCurrentActiveItem(param0: number): void;
   }
   export namespace BubbleNavigationConstraintView {
    export class DisplayMode {
     public static class: java.lang.Class<com.gauravk.bubblenavigation.BubbleNavigationConstraintView.DisplayMode>;
     public static SPREAD: com.gauravk.bubblenavigation.BubbleNavigationConstraintView.DisplayMode;
     public static INSIDE: com.gauravk.bubblenavigation.BubbleNavigationConstraintView.DisplayMode;
     public static PACKED: com.gauravk.bubblenavigation.BubbleNavigationConstraintView.DisplayMode;
     public static valueOf(param0: string): com.gauravk.bubblenavigation.BubbleNavigationConstraintView.DisplayMode;
     public static values(): native.Array<com.gauravk.bubblenavigation.BubbleNavigationConstraintView.DisplayMode>;
    }
   }
  }
 }
}

declare namespace com {
 export namespace gauravk {
  export namespace bubblenavigation {
   export class BubbleNavigationLinearView implements com.gauravk.bubblenavigation.IBubbleNavigation {
    public static class: java.lang.Class<com.gauravk.bubblenavigation.BubbleNavigationLinearView>;
    public onClick(param0: globalAndroid.view.View): void;
    public setTypeface(param0: globalAndroid.graphics.Typeface): void;
    public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
    public onSaveInstanceState(): globalAndroid.os.Parcelable;
    public initialize(): void;
    public constructor(param0: globalAndroid.content.Context);
    public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
    public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
    public setBadgeValue(param0: number, param1: string): void;
    public setNavigationChangeListener(param0: com.gauravk.bubblenavigation.listener.BubbleNavigationChangeListener): void;
    public getCurrentActiveItemPosition(): number;
    public setCurrentActiveItem(param0: number): void;
   }
  }
 }
}

declare namespace com {
 export namespace gauravk {
  export namespace bubblenavigation {
   export class BubbleToggleItem {
    public static class: java.lang.Class<com.gauravk.bubblenavigation.BubbleToggleItem>;
   }
  }
 }
}

declare namespace com {
 export namespace gauravk {
  export namespace bubblenavigation {
   export class BubbleToggleView {
    public static class: java.lang.Class<com.gauravk.bubblenavigation.BubbleToggleView>;
    public setBtShowShapeAlways(param0: boolean): void;
    public setBtBadgeTextSize(param0: number): void;
    public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
    public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
    public toggle(): void;
    public setBtColorActive(param0: number): void;
    public setBtIconWidth(param0: number): void;
    public constructor(param0: globalAndroid.content.Context);
    public activate(): void;
    public setBtTitlePadding(param0: number): void;
    public setBtPadding(param0: number): void;
    public setBtIcon(param0: number): void;
    public setBtBadgeTextColor(param0: number): void;
    public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
    public setBtShapeColor(param0: number): void;
    public setBtActive(param0: boolean): void;
    public setBtDuration(param0: number): void;
    public setBadgeText(param0: string): void;
    public setBtIconHeight(param0: number): void;
    public setInitialState(param0: boolean): void;
    public updateMeasurements(param0: number): void;
    public setBtBadgeText(param0: number): void;
    public isActive(): boolean;
    public setBtColorInactive(param0: number): void;
    public setBtShape(param0: globalAndroid.graphics.drawable.Drawable): void;
    public setBtTitleSize(param0: number): void;
    public deactivate(): void;
    public setTitleTypeface(param0: globalAndroid.graphics.Typeface): void;
    public setBtTitle(param0: string): void;
    public setBtBadgeBackgroundColor(param0: number): void;
   }
  }
 }
}

declare namespace com {
 export namespace gauravk {
  export namespace bubblenavigation {
   export class BuildConfig {
    public static class: java.lang.Class<com.gauravk.bubblenavigation.BuildConfig>;
    public static DEBUG: boolean;
    public static APPLICATION_ID: string;
    public static BUILD_TYPE: string;
    public static FLAVOR: string;
    public static VERSION_CODE: number;
    public static VERSION_NAME: string;
    public constructor();
   }
  }
 }
}

declare namespace com {
 export namespace gauravk {
  export namespace bubblenavigation {
   export class IBubbleNavigation {
    public static class: java.lang.Class<com.gauravk.bubblenavigation.IBubbleNavigation>;
    /**
     * Constructs a new instance of the com.gauravk.bubblenavigation.IBubbleNavigation interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
     */
    public constructor(implementation: {
     setNavigationChangeListener(param0: com.gauravk.bubblenavigation.listener.BubbleNavigationChangeListener): void;
     setTypeface(param0: globalAndroid.graphics.Typeface): void;
     getCurrentActiveItemPosition(): number;
     setCurrentActiveItem(param0: number): void;
     setBadgeValue(param0: number, param1: string): void;
    });
    public constructor();
    public setTypeface(param0: globalAndroid.graphics.Typeface): void;
    public setBadgeValue(param0: number, param1: string): void;
    public setNavigationChangeListener(param0: com.gauravk.bubblenavigation.listener.BubbleNavigationChangeListener): void;
    public getCurrentActiveItemPosition(): number;
    public setCurrentActiveItem(param0: number): void;
   }
  }
 }
}

declare namespace com {
 export namespace gauravk {
  export namespace bubblenavigation {
   export namespace listener {
    export class BubbleNavigationChangeListener {
     public static class: java.lang.Class<com.gauravk.bubblenavigation.listener.BubbleNavigationChangeListener>;
     /**
      * Constructs a new instance of the com.gauravk.bubblenavigation.listener.BubbleNavigationChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
      */
     public constructor(implementation: {
      onNavigationChanged(param0: globalAndroid.view.View, param1: number): void;
     });
     public constructor();
     public onNavigationChanged(param0: globalAndroid.view.View, param1: number): void;
    }
   }
  }
 }
}

declare namespace com {
 export namespace gauravk {
  export namespace bubblenavigation {
   export namespace util {
    export class ViewUtils {
     public static class: java.lang.Class<com.gauravk.bubblenavigation.util.ViewUtils>;
     public static updateDrawableColor(param0: globalAndroid.graphics.drawable.Drawable, param1: number): void;
     public constructor();
     public static getThemeAccentColor(param0: globalAndroid.content.Context): number;
    }
   }
  }
 }
}