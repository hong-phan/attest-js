describe('Sign Up', () => {
    let dropDownSelector = '.mini-menu ul li:nth-child(3)';
    let singupLinkText = '=Sign Up';
    let firstnameSelector = '[name="firstname"]';
    let lastnameSelector = '[name="lastname"]';
    let phoneSelector = '[name="phone"]';
    let emailSelector = '[name="email"]'; 
    let passwordSelector = '[name="password"]';
    let confirmpasswordSelector = '[name="confirmpassword"]'; 
    let singupBtn = '[type="submit"]';

    it('Sign up unsuccessfully', () => {
        // [1] Open a Home page
        browser.url("https://www.phptravels.net/home");
        browser.maximizeWindow();

        // [2] Click to the dropdown
        $(dropDownSelector).click();

        // [3] Click to the Sign link
        $(singupLinkText).click();

        // [4] Input user info
        $(firstnameSelector).setValue('Hong');
        $(lastnameSelector).setValue('Phan');
        $(phoneSelector).setValue('0989000898');
        $(emailSelector).setValue('ptthong@gmail.com');
        $(passwordSelector).setValue('ptthong@gmail');
        $(confirmpasswordSelector).setValue('ptthonglllll');
        browser.pause(3000);
        
        // [5] Click the Sign up button
        $(singupBtn).click();

        // [6] Pause a little to see the result
        browser.pause(3000);
        
    });
});