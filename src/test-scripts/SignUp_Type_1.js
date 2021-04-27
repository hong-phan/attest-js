let dataSignUp = require ('../json-files/signUp.json');
let SignUpPage = require ('../page-objects/SignUp_Page_Type_1');

describe('Sign Up Type 1', () => {
    it('Sign Up an account', () => {
        browser.url("https://www.phptravels.net/home");
        
        SignUpPage.dropDownSelector.click();
        SignUpPage.signUpLinkText.click();
        SignUpPage.firstName.setValue(dataSignUp.firstName);
        SignUpPage.lastName.setValue(dataSignUp.lastName);
        SignUpPage.phoneNumber.setValue(dataSignUp.phoneNumber);
        SignUpPage.email.setValue(dataSignUp.email);
        SignUpPage.password.setValue(dataSignUp.password);
        SignUpPage.confirmPassword.setValue(dataSignUp.confirmPassword);
    });
    
});