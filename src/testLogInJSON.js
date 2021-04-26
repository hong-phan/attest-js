
    let dataLogIn = require('./logIn.json');
    // Login by clicking to a dropdown
    describe('Login', () => {
        let pageUrl = 'https://www.phptravels.net/home';
        let classDropDownSelector = '.mini-menu ul li:nth-child(3)';
        let loginLinkText = '=Login';
        let usernameSelector = '[name="username"]';
        let passwordSelector = '[name="password"]';
        let loginBtn = '[type="submit"]';
        let screenShotInput1 = './src/screenShots/logIn/login_input_1.png';
        let screenShotResult2 = './src/screenShots/logIn/login_result_1.png'
    
        it('Log in unsuccessfully', () => {
            // [1] Open a Home page
            browser.url(pageUrl);
            browser.maximizeWindow();
    
            // [2] Click to the dropdown
            $(classDropDownSelector).click();
    
            // [3] Click to the Login link
            $(loginLinkText).click();
    
            // [4] Input username and password
            $(usernameSelector).setValue(dataLogIn.userName);
            $(passwordSelector).setValue(dataLogIn.password);
            browser.pause(2000);
            browser.saveScreenshot(screenShotInput1);
            // [5] Click the Login button
            $(loginBtn).click();
    
            // [6] Pause a little to see the result
            browser.pause(2000);
            browser.saveScreenshot(screenShotResult2);
            
        });
    });