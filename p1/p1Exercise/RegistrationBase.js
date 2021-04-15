class RegistrationBase{

    constructor(userInfo){
        this._username = userInfo.username;
        this._email = userInfo.email;
    }

    isUsernameValid(){
        let isValid;

        if(this._username.indexOf(' ') !==-1){ //Kiem tra ton tai khoang trang hay khong
            isValid = false;
        } else {
            isValid = true;
        }
        return isValid;

    }

    getEmailDomain(){
        let emailDomain = this._email.split('@')[1];
        return emailDomain;
    }

}
module.exports = RegistrationBase