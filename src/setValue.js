describe('API setValue', () => {
    it('Set value', () => {
        browser.url("https://www.phptravels.net/login");
        browser.pause(3000);

        let usernameSelector = $('[name="username"]');
        let passwordSelector = $('[name="password"]');
        usernameSelector.setValue('ptthong@gmail.com');
        passwordSelector.setValue('ptthonggmail.com');

        browser.pause(7000);
    });

});
