var BubbleNavigation = require("nativescript-bubble-navigation").BubbleNavigation;
var bubbleNavigation = new BubbleNavigation();

describe("greet function", function() {
    it("exists", function() {
        expect(bubbleNavigation.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(bubbleNavigation.greet()).toEqual("Hello, NS");
    });
});