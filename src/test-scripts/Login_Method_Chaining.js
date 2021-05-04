let LoginPage = require('../page-objects/LoginPage.js');
let dataLogin = require('../json-files/logIn.json');
let ScreenShot = require('../page-objects/LoginPage.js');
// let screenShotPathInit = './src/screenShots-files/LoginInit.png'
// let screenShotPathInput = './src/screenShots-files/LoginInput.png'
// let screenShotPathResult = './src/screenShots-files/LoginResult.png'

describe('Apply Method Chaining to Login Page', () => {
    it('Login unsuccessfully', () => {
        // 1. Open Login Page
        browser.url("https://www.phptravels.net/home");

        // 2. Call Page object interaction method
        LoginPage.clickDropdown();
        LoginPage.clickLoginLinkText();
        LoginPage.waitUsernameTxtbxDisplayed();
        
        // browser.saveScreenshot(screenShotPathInit)
        // ScreenShot.screenShotInit();

        LoginPage.inputUsername(dataLogin.userName);
        LoginPage.inputPassword(dataLogin.passWord);

        // browser.saveScreenshot(screenShotPathInput);
        // ScreenShot.screenShotInput();
        
        LoginPage.clickLoginBtn();

        // browser.saveScreenshot(screenShotPathResult);
        // ScreenShot.screenShotResult();

        browser.pause(2000);
    });
    
});