# Nativescript Bubble Navigation ![apple](https://cdn3.iconfinder.com/data/icons/picons-social/57/16-apple-32.png) ![android](https://cdn4.iconfinder.com/data/icons/logos-3/228/android-32.png) 

[![npm](https://img.shields.io/npm/v/nativescript-bubble-navigation.svg)](https://www.npmjs.com/package/nativescript-bubble-navigation)
[![npm](https://img.shields.io/npm/dt/nativescript-bubble-navigation.svg?label=npm%20downloads)](https://www.npmjs.com/package/nativescript-bubble-navigation)
[![Build Status][build-status]][build-url]

 [build-status]:https://travis-ci.org/skhye05/nativescript-bubble-navigation.svg?branch=master
 [build-url]:https://travis-ci.org/skhye05/nativescript-bubble-navigationF

## Overview

 Nativescript Multi Select is a navigation tab plugins which provides beautiful navigations.

 <p>
  <img src="https://raw.githubusercontent.com/skhye05/NativeScript-Bubble-Navigation/master/ios.gif"  width="300"/>
  <img src="https://raw.githubusercontent.com/skhye05/NativeScript-Bubble-Navigation/master/android.gif" width="300"/>
</p>

## Installation

```javascript
tns plugin add nativescript-bubble-navigation
```

## Usage

### <img src="https://raw.githubusercontent.com/skhye05/NativeScript-Bubble-Navigation/master/res/typescript.png" width="20"/> TypeScript

#### xml

```xml
<Page xmlns="http://schemas.nativescript.org/tns.xsd" loaded="pageLoaded" class="page" 
  xmlns:ui="nativescript-bubble-navigation">
  <GridLayout rows="* auto" colunms="*" backgroundColor="{{ bg }}">
    <StackLayout row="0" class="p-20">
      <Label class="h2" color="white" horizontalAlignment="center" text="{{ title }}"/>
    </StackLayout>
    <ui:BubbleNavigation row="1" tabs="{{ tabs }}" loaded="onBubbleNavigationLoaded" padding="12" tabBackgroundColor="white" elevation="8"/>
  </GridLayout>
</Page>
```

#### main-page.ts

```typescript
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
```

#### main-view-model.ts

```typescript
import { Observable } from 'tns-core-modules/data/observable';
import { BubbleNavigationItem } from 'nativescript-bubble-navigation';

export class HelloWorldModel extends Observable {
  public title: string = 'HOME TAB!';
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
}
```

### <img src="https://raw.githubusercontent.com/skhye05/nativescript-Bubble-Navigation/master/res/angular.png" width="20"/> Angular

#### app.module.ts

```typescript
import { BubbleNavigationModule } from "nativescript-bubble-navigation/angular";

@NgModule({
    imports: [
        BubbleNavigationModule
    ],
    ...
})
```

#### your.component.ts

```typescript
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

```

#### your.component.html

```html
<ActionBar class="action-bar">
    <Label class="action-bar-title" text="Home"></Label>
</ActionBar>

<GridLayout rows="* auto" colunms="*" [backgroundColor]="bg">
    <StackLayout row="0" class="p-20">
        <Label class="h1" color="white" horizontalAlignment="center" [text]="title"></Label>
    </StackLayout>

    <BubbleNavigation (tabSelected)="onBottomNavigationTabSelected($event)" row="1" [tabs]="tabs"
        loaded="onBubbleNavigationLoaded" padding="12" tabBackgroundColor="white" elevation="8"></BubbleNavigation>
</GridLayout>

```

### <img src="https://raw.githubusercontent.com/skhye05/NativeScript-Bubble-Navigation/master/res/vue.png" width="20"/> Vue

### app.js

```javascript

import BubbleNavigation from "nativescript-bubble-navigation/vue";

Vue.use(BubbleNavigation);

new Vue({
  ...
}).$start();

```

### your-component.vue

```html
<template>
  <Page class="page">
    <ActionBar class="action-bar">
      <Label class="action-bar-title" text="Home"></Label>
    </ActionBar>
    <GridLayout rows="* auto" colunms="*" :backgroundColor="bg">
      <StackLayout row="0" class="p-20">
        <Label class="h1" color="white" horizontalAlignment="center" :text="title"></Label>
      </StackLayout>

      <BubbleNavigation
        @tabSelected="onBottomNavigationTabSelected"
        row="1"
        :tabs="tabs"
        padding="12"
        tabBackgroundColor="white"
        elevation="8"
      />
    </GridLayout>
  </Page>
</template>

<script>
import { OnTabSelectedEventData, BubbleNavigationItem } from 'nativescript-bubble-navigation';

export default {
    data() {
        return {
            tabs: [
              new BubbleNavigationItem('Home', 'ic_home', '#f44336', '#e57373'),
              new BubbleNavigationItem('Search', 'ic_search', '#03a9f4', '#64b5f6'),
              new BubbleNavigationItem('Likes', 'ic_like', '#607d8b', '#90a4ae'),
              new BubbleNavigationItem('Notify', 'ic_playlist', '#4caf50', '#81c784')
            ],
            title: 'HOME TAB!',
            bg: '#e57373',
        }
    },
    methods: {
        onBottomNavigationTabSelected(args) {
            this.title = `${args.name.toUpperCase()} TAB!`;
            this.bg = this.tabs[args.position].colorInactive;
            console.log('tab selected ' + args.name + ' at position ' + args.position);
        }
    }
};
</script>
```

## API

### BubbleNavigation

#### Properties

| Property           | Type                          | Description                                        | Platforms     |
| ------------------ | ----------------------------- | -------------------------------------------------- | ------------- |
| tabs               | `Array<BubbleNavigationItem>` | Array containing the tabs for the BottomNavigation | Android & iOS |
| padding            | `number`                      | Set Bubble Tab padding                             | Android       |
| tabBackgroundColor | `string`                      | Set Tab Bar Background Color                       | Android & iOS |
| elevation          | `number`                      | Set tab elevation/ shadow                          | Android       |

#### Events

| Property    | Type                                           | Description                                                                         | Platforms     |
| ----------- | ---------------------------------------------- | ----------------------------------------------------------------------------------- | ------------- |
| tabSelected | `function ($event: OnTabSelectedEventData) {}` | Event get trigger every time the user select a new tab that receive an event object | Android & iOS |

#### Methods

| Property                   | Type   | Description                   | Platforms     |
| -------------------------- | ------ | ----------------------------- | ------------- |
| `selectTab(index: number)` | `Void` | Select a tab programmatically | Android & iOS |


### BubbleNavigationItem

#### Properties

| Property      | Type     | Description                                                        | Platforms     |
| ------------- | -------- | ------------------------------------------------------------------ | ------------- |
| title         | `string` | Select a tab title                                                 | Android & iOS |
| icon          | `string` | Select a tab icon                                                  | Android & iOS |
| colorActive   | `color`  | Select a active color, the color of the tab when it's selected     | Android & iOS |
| colorInactive | `color`  | Select a active color, the color of the tab when it isn't selected | Android & iOS |

## Limitations

### iOS

Currently on ios adding more than four tabs will ressort having your text animations cut.

## Author

Jonathan Mayunga, mayunga.j@gmail.com

## Credits

- For Android we're using the [Bubble Navigation by Gaurav Kumar](https://github.com/gauravk95/bubble-navigation),
- For iOS [BubbleTabBar by Cuberto](https://github.com/Cuberto/bubble-icon-tabbar).
    
## License

Apache License Version 2.0, January 2004
