const USER_NAME_TXTBX = '[name="username"]';
const PASSWORD_TXTBX = '[name="password"]';
const LOGIN_BTN = '[type="submit"]';
//const CLASS_DROPDOWN_SELECTOR = '.mini-menu ul li:nth-child(3)';

class Login_Page {

    waitForUsernameDisplayed (){
        $(USER_NAME_TXTBX).waitForDisplayed(15000);
    }
    
    // get classDropDownSelector (){
    //     return $(CLASS_DROPDOWN_SELECTOR);
    // }

    get username(){
        return $(USER_NAME_TXTBX);
    }

    get password(){
        return $(PASSWORD_TXTBX);
    }

    get loginBtn(){
        return $(LOGIN_BTN);
    }
}
module.exports = new Login_Page(); //Export an instance to use all 'getter'