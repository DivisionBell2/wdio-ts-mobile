import Screen from "./screen.js";

export default class EnterPersonalInfoScreen extends Screen {
    private selectors = {
        personalInfoTitle: {
            ios: '//XCUIElementTypeStaticText[@name="Информация о вас"]',
            android: '//android.view.View[@content-desc="Информация о вас"]'
        }
    }

    async waitForPersonalInfoTitle(): Promise<void> {
        switch (this.platform) {
            case 'ios': {
                await (await $(this.selectors.personalInfoTitle.ios)).waitForDisplayed({ timeout: 3000 });
                break;
            }
            case 'android': {
                await (await $(this.selectors.personalInfoTitle.android)).waitForDisplayed({ timeout: 3000 });
                break;
            }
            default: { new Error("Платформа не выбрана") }
        }
    }
}