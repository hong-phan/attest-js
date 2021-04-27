const DROPDOWN_SELECTOR = '.mini-menu ul li:nth-child(3)';
const SIGN_UP_LINK_TEXT = '=Sign Up';
const FIRST_NAME = '[name="firstname"]';
const LAST_NAME = '[name="lastname"]';
const PHONE_NUMBER = '[name="phone"]';
const EMAIL = '[name="email"]';
const PASSWORD = '[name="password"]';
const CONFIRM_PASSWORD = '[name="confirmpassword"]';
const SIGN_UP_BTN = '[type="submit"]';

class SignUp_Page {
    waitForFirstNameDisplayed (){
        $(FIRST_NAME).waitForDisplayed(15000);
    };

    get dropDownSelector (){
        return $(DROPDOWN_SELECTOR);
    }

    get signUpLinkText (){
        return $(SIGN_UP_LINK_TEXT);
    }

    get firstName() {
        return $(FIRST_NAME);
    };

    get lastName() {
        return $(LAST_NAME);
    }

    get phoneNumber() {
        return $(PHONE_NUMBER);
    }

    get email() {
        return $(EMAIL);
    }

    get password() {
        return $(PASSWORD);
    }

    get confirmPassword() {
        return $(CONFIRM_PASSWORD);
    }

    get signUpBtn() {
        return $(SIGN_UP_BTN);
    }
}

module.exports = new SignUp_Page();