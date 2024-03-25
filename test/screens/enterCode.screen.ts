import Screen from "./screen.js";

export default class EnterCodeScreen extends Screen {
    private selectors = {}

    async enterCode(code: string): Promise<void> {
        const codeArray = await code.split("");
        for (let i = 0; i < codeArray.length; i++) {
            await driver.keys(codeArray[i]);
        }
    }
}