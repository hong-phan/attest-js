const DRODDOWN_SELECTOR = '.mini-menu ul li:nth-child(3)';
const LOGIN_LINK_TEXT = '=Login';
const USER_NAME_TXTBX = '[name="username"]';
const PASSWORD_TXTBX = '[name="password"]';
const LOGIN_BTN = '[type="submit"]';
let screenShotPathInit = './src/screenShots-files/LoginInit.png'
let screenShotPathInput = './src/screenShots-files/LoginInput.png'
let screenShotPathResult = './src/screenShots-files/LoginResult.png'

class LoginPage{
    clickDropdown (){
        $(DRODDOWN_SELECTOR).click();
    }

    clickLoginLinkText(){
        $(LOGIN_LINK_TEXT).click();
    }

    waitUsernameTxtbxDisplayed(){
        $(USER_NAME_TXTBX).waitForDisplayed(15000);
    }

    inputUsername(username){
        $(USER_NAME_TXTBX).setValue(username);
    }

    inputPassword(password){
        $(PASSWORD_TXTBX).setValue(password);
    }

    clickLoginBtn(){
        $(LOGIN_BTN).click();
    }

}

class ScreenShot {
    screenShotInit(){
        browser.saveScreenshot(screenShotPathInit);
    }

    screenShotInput(){
        browser.saveScreenshot(screenShotPathInput);
    }

    screenShotResult(){
        browser.saveScreenshot(screenShotPathResult);
    }

}

module.exports = new LoginPage();
module.exports = new ScreenShot();




