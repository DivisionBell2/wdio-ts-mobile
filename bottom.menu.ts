import Screen from "../screen.js";

export default class BottomMenu extends Screen {
    private selectors = {
        profileButton: {
            ios: '//XCUIElementTypeImage[@name="Профиль"]',
            android: '//android.widget.ImageView[@content-desc="Профиль"]'
        },
        serviceConfirmButton: {
            ios: '//XCUIElementTypeButton[@name="Разрешить"]',
            android: '//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_allow_button"]'
        },

    }

    async clickProfileMenu(): Promise<void> {
        switch (this.platform) {
            case 'ios': {
                await $(this.selectors.serviceConfirmButton.ios).click();
                await $(this.selectors.profileButton.ios).click();
                break;
            }
            case 'android': {
                await $(this.selectors.serviceConfirmButton.android).click();
                await $(this.selectors.profileButton.android).click();
                break
            }
            default: { new Error("Платформа не выбрана") }
        }
    }
}