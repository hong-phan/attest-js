describe('Learning API', () => {

    let usernameSelector = '[name="username"]';
    let passwordSelector = '[name="password"]';
    let loginBtn = '[type="submit"]';

    it('click', () => {
        // [1] Open login page
        browser.url("https://www.phptravels.net/login");

        // [2] Wait for the username textbox displayed
        $(usernameSelector).waitForDisplayed(5000);

        // [3] Input username and password
        $(usernameSelector).setValue('ptthong@gmail.com');
        $(passwordSelector).setValue('ptthonggmail.com');

        // [4] Click the Login button
        $(loginBtn).click();

        // [4] Pause a little to see the result
        browser.pause(2000);
        
    });
});