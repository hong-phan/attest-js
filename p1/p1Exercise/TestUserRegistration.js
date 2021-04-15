let UserReg = require('./UserRegistration.js');
let userInfo = require('./userinfo.json');

let userReg = new UserReg(userInfo);
userReg.registerUser();