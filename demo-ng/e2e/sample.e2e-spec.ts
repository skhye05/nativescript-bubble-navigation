import { AppiumDriver, createDriver, SearchOptions } from "nativescript-dev-appium";
import { assert } from "chai";
import { spawn, exec } from 'child_process';

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
        let btnTap;
        if (driver.isAndroid) {
            btnTap = await driver.findElementsByClassName('android.widget.ImageView');
            await btnTap[1].click();
        } else {
            btnTap = await driver.findElementsByClassName(driver.locators.getElementByName("image"));
            let point;
            await btnTap[1].getRectangle().then(value => { point = value; });
            await driver.clickPoint(point.x + 15, point.y + 15);
        }

        const message = "SEARCH TAB!";
        const lblMessage = await driver.findElementByText(message, SearchOptions.contains);
        assert.equal(await lblMessage.text(), message);
    });

    it("should tap likes tab", async () => {
        let btnTap;
        if (driver.isAndroid) {
            btnTap = await driver.findElementsByClassName('android.widget.ImageView');
            await btnTap[2].click();
        } else {
            btnTap = await driver.findElementsByClassName(driver.locators.getElementByName("image"));
            let point;
            await btnTap[2].getRectangle().then(value => { point = value; });
            await driver.clickPoint(point.x + 15, point.y + 15);
        }

        const message = "LIKES TAB!";
        const lblMessage = await driver.findElementByText(message, SearchOptions.contains);
        assert.equal(await lblMessage.text(), message);
    });

    it("should tap notify tab", async () => {
        let btnTap;
        if (driver.isAndroid) {
            btnTap = await driver.findElementsByClassName('android.widget.ImageView');
            await btnTap[3].click();
        } else {
            btnTap = await driver.findElementsByClassName(driver.locators.getElementByName("image"));
            let point;
            await btnTap[3].getRectangle().then(value => { point = value; });
            await driver.clickPoint(point.x + 15, point.y + 15);
        }

        const message = "NOTIFY TAB!";
        const lblMessage = await driver.findElementByText(message, SearchOptions.contains);
        assert.equal(await lblMessage.text(), message);
    });

    it("should tap home tab", async () => {
        let btnTap;
        if (driver.isAndroid) {
            btnTap = await driver.findElementsByClassName('android.widget.ImageView');
            await btnTap[0].click();
        } else {
            btnTap = await driver.findElementsByClassName(driver.locators.getElementByName("image"));
            let point;
            await btnTap[0].getRectangle().then(value => { point = value; });
            await driver.clickPoint(point.x + 15, point.y + 15);
        }

        const message = "HOME TAB!";
        const lblMessage = await driver.findElementByText(message, SearchOptions.contains);
        assert.equal(await lblMessage.text(), message);
    });
});