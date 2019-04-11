import Vue from "nativescript-vue";

import BubbleNavigation from "nativescript-bubble-navigation/vue";

import Home from "./components/Home";

Vue.use(BubbleNavigation);

new Vue({

    template: `
        <Frame>
            <Home />
        </Frame>`,

    components: {
        Home
    }
}).$start();
