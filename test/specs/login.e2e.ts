import { getVerifyCodeBySendTo } from "../../entities/db/user_notifications.js";
import BottomMenu from "../screens/blocks/bottom.menu.js";
import MessagePopup from "../screens/blocks/message.popup.js";
import EnterCodeScreen from "../screens/enterCode.screen.js";
import EnterPersonalInfoScreen from "../screens/enterPersonalInfo.sreen.js";
import EnterPhoneScreen from "../screens/enterPhone.screen.js";
import StartScreen from "../screens/start.screen.js";
import { getRandomPhoneNumber } from "../../utils/randomMethods.js";

describe("Авторизация", () => {
    const startScreen = new StartScreen(process.env.PLATFORM as PlatformName);
    const enterPhoneScreen = new EnterPhoneScreen(process.env.PLATFORM as PlatformName);
    const enterCodeScreen = new EnterCodeScreen(process.env.PLATFORM as PlatformName);
    const enterPersonalInfoScreen = new EnterPersonalInfoScreen(process.env.PLATFORM as PlatformName);

    const messagePopup = new MessagePopup(process.env.PLATFORM as PlatformName);
    const bottomMenu = new BottomMenu(process.env.PLATFORM as PlatformName);

    let userPhone: string;
    
    beforeEach(async () => {
        userPhone = await getRandomPhoneNumber();
    });

    it("Получение кода и авторизация в приложение", async () => {
        await startScreen.clickSkipButton();
        await messagePopup.clickContinueButton();
        await bottomMenu.clickProfileMenu();
        await messagePopup.clickContinueButton();
        await enterPhoneScreen.enterPhoneAndClickGetCodeButton(userPhone);
        await enterCodeScreen.enterCode(await getVerifyCodeBySendTo(userPhone));
        await enterPersonalInfoScreen.waitForPersonalInfoTitle();
    });
});