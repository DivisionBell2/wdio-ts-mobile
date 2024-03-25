import Screen from "./screen.js";

export default class StartScreen extends Screen {
    private selectors = {
        applySystemMenu: {
            ios: '//XCUIElementTypeButton[@name="Разрешить"]'
        },
        skipButton: {
            ios: '//XCUIElementTypeButton[@name="Пропустить"]',
            android: '//android.widget.Button[@content-desc="Пропустить"]'
        }
    }

    async clickSkipButton(): Promise<void> {
        await driver.pause(1000)
        switch (this.platform) {
            case 'ios': {
                if (await $(this.selectors.applySystemMenu.ios).isDisplayed()) {
                    await $(this.selectors.applySystemMenu.ios).click();
                }
                await $(this.selectors.skipButton.ios).click();
                
                break;
            }
            case 'android': {
                console.log("!!!!!!!!!!!")
                //await driver.pause(1000)
                await $(this.selectors.skipButton.android).click();
                break;
            }
            default: { new Error("Платформа не выбрана") }
        }
    }
}