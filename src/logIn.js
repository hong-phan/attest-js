
    // Login by clicking to a dropdown
    describe('Login', () => {
    let classDropDownSelector = '.mini-menu ul li:nth-child(3)';
    let loginLinkText = '=Login';
    let usernameSelector = '[name="username"]';
    let passwordSelector = '[name="password"]';
    let loginBtn = '//button[text()="Login"]';
    //let loginBtn = '[type="submit"]';

  
    it('Log in unsuccessfully', () => {
        // [1] Open a Home page
        browser.url("https://www.phptravels.net/home");
        browser.maximizeWindow();

        // [2] Click to the dropdown
        $(classDropDownSelector).click();

        // [3] Click to the Login link
        $(loginLinkText).click();

        // [4] Input username and password
        $(usernameSelector).setValue('ptthong@gmail.com');
        $(passwordSelector).setValue('ptthonggmail.com');
        browser.pause(2000);
        
        // [5] Click the Login button
        $(loginBtn).click();
        //$(loginBtn).click({button: 'Login'});

        // [6] Pause a little to see the result
        browser.pause(2000);
        
    });
});