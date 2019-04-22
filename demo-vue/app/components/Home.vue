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
        @tabSelected="onBubbleNavigationTabSelected"
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
        onBubbleNavigationTabSelected(args) {
            this.title = `${args.name.toUpperCase()} TAB!`;
            this.bg = this.tabs[args.position].colorInactive;
            console.log('tab selected ' + args.name + ' at position ' + args.position);
        }
    }
};
</script>

<style scoped lang="scss">
// Start custom common variables
@import "../app-variables";
// End custom common variables

// Custom styles
.fa {
  color: $accent-dark;
}

.info {
  font-size: 20;
}
</style>
