import { AppiumDriver, createDriver, SearchOptions } from "nativescript-dev-appium";
import { assert } from "chai";

describe("sample scenario", () => {
    const defaultWaitTime = 5000;
    let driver: AppiumDriver;

    before(async () => {
        driver = await createDriver();
    });

    after(async () => {
        await driver.quit();
        console.log("Quit driver!");
    });

    afterEach(async function () {
        if (this.currentTest.state === "failed") {
            await driver.logTestArtifacts(this.currentTest.title);
        }
    });

    it("should tap search tab", async () => {
        const btnTap = await driver.findElementsByClassName('android.widget.ImageView');
        await btnTap[1].click();

        const message = "SEARCH TAB!";
        const lblMessage = await driver.findElementByText(message, SearchOptions.contains);
        assert.equal(await lblMessage.text(), message);
    });

    it("should tap likes tab", async () => {
        const btnTap = await driver.findElementsByClassName('android.widget.ImageView');
        await btnTap[2].click();

        const message = "LIKES TAB!";
        const lblMessage = await driver.findElementByText(message, SearchOptions.contains);
        assert.equal(await lblMessage.text(), message);
    });

    it("should tap notify tab", async () => {
        const btnTap = await driver.findElementsByClassName('android.widget.ImageView');
        await btnTap[3].click();

        const message = "NOTIFY TAB!";
        const lblMessage = await driver.findElementByText(message, SearchOptions.contains);
        assert.equal(await lblMessage.text(), message);
    });

    it("should tap profile tab", async () => {
        const btnTap = await driver.findElementsByClassName('android.widget.ImageView');
        await btnTap[4].click();

        const message = "PROFILE TAB!";
        const lblMessage = await driver.findElementByText(message, SearchOptions.contains);
        assert.equal(await lblMessage.text(), message);
    });

    it("should tap home tab", async () => {
        const btnTap = await driver.findElementsByClassName('android.widget.ImageView');
        await btnTap[0].click();

        const message = "HOME TAB!";
        const lblMessage = await driver.findElementByText(message, SearchOptions.contains);
        assert.equal(await lblMessage.text(), message);
    });
});