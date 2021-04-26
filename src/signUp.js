let dataSignUp = require('./signUp.json');

describe('Sign Up', () => {
    let pageUrl = 'https://www.phptravels.net/home';
    let dropDownSelector = '.mini-menu ul li:nth-child(3)';
    let singupLinkText = '=Sign Up';
    let firstnameSelector = '[name="firstname"]';
    let lastnameSelector = '[name="lastname"]';
    let phoneSelector = '[name="phone"]';
    let emailSelector = '[name="email"]'; 
    let passwordSelector = '[name="password"]';
    let confirmpasswordSelector = '[name="confirmpassword"]'; 
    let singupBtn = '[type="submit"]';
    let screenShotInput1 = './src/screenShots/signUp/signUp_Input_1.png';
    let screenShotResult1 = './src/screenShots/signUp/signUp_Result_1.png';
    it('Sign up unsuccessfully', () => {
        // [1] Open a Home page
        browser.url(pageUrl);
        browser.maximizeWindow();

        // [2] Click to the dropdown
        $(dropDownSelector).click();

        // [3] Click to the Sign link
        $(singupLinkText).click();

        // [4] Input user info
        $(firstnameSelector).setValue(dataSignUp.firstName);
        $(lastnameSelector).setValue(dataSignUp.lastName);
        $(phoneSelector).setValue(dataSignUp.mobileNumber);
        $(emailSelector).setValue(dataSignUp.email);
        $(passwordSelector).setValue(dataSignUp.password);
        $(confirmpasswordSelector).setValue(dataSignUp.confirmPassword);
        browser.pause(2000);

        // [5] Screenshot Input
        browser.saveScreenshot(screenShotInput1);
        
        // [6] Click the Sign up button
        $(singupBtn).click();
        browser.pause(3000);

        // [7] Screenshot Result
        browser.saveScreenshot(screenShotResult1);
        
    });
});