export default {
    install: (Vue) => {
      Vue.registerElement('BubbleNavigation', () => require('../').BubbleNavigation);
      Vue.registerElement('BubbleNavigationTab', () => require('../').BubbleNavigationTab);
    },
  };