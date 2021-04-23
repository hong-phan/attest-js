describe('Book a flight', () => {
    it('Book a flight unsuccessfully', () => {
        let flightstabSelector = '[href="#flights"]';
        let tripTypeSelector = '#flightSearchRadio-1';
        let classDropdownSelector = '.chosen-container:nth-last-child(2)';
        //let classDropdownSelector = '[name="cabinclass"]';
        //let classDropdownSelector = '.chosen-results li:contains("First")';
        //let classDropdownSelector = '.chosen-drop';
        let locationFromSelector = '#s2id_location_from';
        let locationToSelector = '#s2id_location_to';
        let departureDateSelector = '[name="departure_date"]';
        let returnDateEndSelector = '[name="reture_date"]';
        let adultAmountSelector = '';
        let childAmountSelector = '';
        let infantAmountSelector = '';
        let searchBtn = '[type="submit"]';

        // [0] Open a page
        browser.url("https://www.phptravels.net/home");

        // [1] Select Flights tab
        $(flightstabSelector).click();
        browser.maximizeWindow();
        browser.pause(3000);

        //[2] Select First class
        $(classDropdownSelector).selectByIndex(0);
        //$(classDropdownSelector).click();
        // $(classDropdownSelector).selectByVisibleText('First');

        // $(('select[name="cabinclass"]').parent().find('.chosen-results')).selectByIndex(0);
        // $('[value="first"]').isSelected();
        //$(classDropdownSelector).selectByAttribute('value', 'first')
         //browser.pause(3000);   

        // [3] Select Round trip
        //$(tripTypeSelector).click();

        // [4] Enter From
        //$(locationFromSelector).setValue('CLO');

        // [5] Enter To
        //$(locationToSelector).setValue('New York');

        // [6] Select Depart date / Select Return date
        //$(departureDateSelector).setValue('2021-04-30');

        // [7] 3 adults, 2 childs, 1 infants

        // [8] Clicking to Search button
        //$(searchBtn).click();
        //[9] Select a flight

        // [10] Book a tiket




    });

});