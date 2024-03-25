import Screen from "./screen.js";

export default class EnterPhoneScreen extends Screen {
    private selectors = {
        phoneInput: {
            ios: '//XCUIElementTypeTextField',
            android: '//android.widget.EditText'
        },
        getCodeButton: {
            ios: '//XCUIElementTypeStaticText[@name="Получить код"]',
            android: '//android.view.View[@content-desc="Получить код"]'
        }
    }

    async enterPhoneAndClickGetCodeButton(phone: string): Promise<void> {
        switch (this.platform) {
            case 'ios': {
                await $(this.selectors.phoneInput.ios).click();
                await $(this.selectors.phoneInput.ios).setValue(phone.substring(2, 13));
                await $(this.selectors.phoneInput.ios).setValue(phone.substring(2, 13));
                await driver.pause(1000);
                await $(this.selectors.getCodeButton.ios).click();
                
                break;
            }
            case 'android': {
                await $(this.selectors.phoneInput.android).click();
                await $(this.selectors.phoneInput.android).setValue(phone.substring(2, 13));
                await driver.pause(1000);
                await $(this.selectors.getCodeButton.android).click();
                break;
            }
            default: { new Error("Платформа не выбрана") }
        }
    }
}