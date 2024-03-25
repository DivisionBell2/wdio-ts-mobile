import Screen from "./screen.js";

export default class StartScreen extends Screen {
    private selectors = {
        applySystemMenu: {
            ios: '//XCUIElementTypeButton[@name="Разрешить"]'
        },
        skipButton: {
            ios: '//XCUIElementTypeButton[@name="Пропустить"]'
        }
    }

    async clickSkipButton(): Promise<void> {
        switch (this.platform) {
            case 'ios': {
                await $(this.selectors.applySystemMenu.ios).click();
                await $(this.selectors.skipButton.ios).click();
                break;
            }
            case 'android': {

            }
            default: { new Error("Платформа не выбрана") }
        }
    }
}