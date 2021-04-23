describe('Book Tour', () => {
    it('Search successfully ', () => {
        let tourSelector =  '[href="#tours"]';
        let modifySelector = 'div.ml-auto';
        //let destinationSelector = '#s2id_autogen1'; 
        let destinationSelector = '#s2id_autogen19'; 
        let destinationSelector_sub = '.select2-result-sub li:nth-child(2)';
        let tourTypeSelector = '#tourtype_chosen';
        let tourTypeSelector_sub = '.chosen-results li:nth-of-type(2)';
        let dateSelector = '#DateTours';
        let btnUpSelector = '.btn.btn-white.bootstrap-touchspin-up';
        let searchBtn = '[type="submit"]';
        let bookBtn = '[type="submit"]';

        // [1] Open the URL
        browser.url("https://www.phptravels.net/home");

        // [2] Clicking to Tour tab
        $(tourSelector).click();

        // // [2] Clicking to the Modify Search button
        // $(modifySelector).click();
        // browser.pause(1000);

        // [3] Select destination
        $(destinationSelector).click();
        browser.pause(1000);
        $(destinationSelector_sub).click();
        browser.pause(1000);

        // [4] Select tour type _ Private type
        $(tourTypeSelector).click();
        browser.pause(1000);
        $(tourTypeSelector_sub).click();
        browser.pause(1000);

        // [5] Select date
        $(dateSelector).click();
        $(dateSelector).clearValue();
        $(dateSelector).setValue('30/04/2021');
        browser.pause(1000);

        // [6] Click 3 times to (+) button
        $(btnUpSelector).click();
        browser.pause(1000);
        $(btnUpSelector).click();
        browser.pause(1000);

        // [7] Clicking to the Seach button
        $(searchBtn).click();
        browser.pause(6000);

        // [8] Clicking to the Book button
        $(bookBtn).click();
        browser.pause(6000);

    });

});