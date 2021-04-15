let RegistrationBase = require('./RegistrationBase')// dung ke thua lop cha, phai import vao

class UserRegistration extends RegistrationBase {
    constructor(userInfo){
        super (userInfo);
    }

    registerUser(){
        if(super.isUsernameValid() && super.getEmailDomain() === 'gmail.com'){
            this._registerGmailUser();
        } else if(super.isUsernameValid() && super.getEmailDomain()=== 'outlook.com'){
            this._registerOutlooklUser();

        } else {
            console.log('User name or Email domain is NOT supported!')
        }
    }

    _registerGmailUser(){
        console.log('Rgistered Gmail user successfully')
    }
    _registerOutlooklUser(){
        console.log('Rgistered Outlook user successfully')
    }
}
module.exports = UserRegistration;