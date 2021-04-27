let dataLogIn = require('../json-files/logIn.json');
let LoginPage = require ('../page-objects/LoginPage_Type_1.js')

describe('Login Type 1', () => {
    it('Login to the page', () => {
        browser.url("https://www.phptravels.net/login");

        //LoginPage.classDropDownSelector.click();
        LoginPage.waitForUsernameDisplayed();
        LoginPage.username.setValue(dataLogIn.userName);
        LoginPage.password.setValue(dataLogIn.password);
        LoginPage.loginBtn.click();
        
    });
    
});