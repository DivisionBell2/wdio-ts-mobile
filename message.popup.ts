import Screen from "../screen.js";

export default class MessagePopup extends Screen {
    private selectors = {
        continueButton: {
            ios: '//XCUIElementTypeStaticText[@name="Продолжить"]',
            android: '//android.view.View[@content-desc="Продолжить"]'
        }
    }

    async clickContinueButton(): Promise<void> {
        switch (this.platform) {
            case 'ios': {
                await $(this.selectors.continueButton.ios).click();
                break;
            }
            case 'android': {
                await $(this.selectors.continueButton.android).click();
                break;
            }
            default: { new Error("Платформа не выбрана") }
        }
    }
}