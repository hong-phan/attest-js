let dataLogIn = require('../json-files/logIn.json');
let LoginPage = require ('../page-objects/Login_Page_Type_1.js')

describe('Login Type 1', () => {
    it('Login to the page', () => {
        browser.url("https://www.phptravels.net/home");
        
        LoginPage.dropDownSelector.click();
        LoginPage.loginLinkText.click();
        LoginPage.waitForUsernameDisplayed();
        LoginPage.username.setValue(dataLogIn.userName);
        LoginPage.password.setValue(dataLogIn.password);
        LoginPage.loginBtn.click();
        
    });
    
});