describe('Book a flight', () => {
    it('Book a flight uncessfully', () => {
        let flightstabSelector = '[href="#flights"]';
        let tripTypeSelector = '#flightSearchRadio-1';
        let classDropdownSelector = '[name="cabinclass"]';
        let locationFromSelector = '#location_from_code';
        let locationToSelector = '#location_to_code';
        let flightsDateStartSelector = '#FlightsDateStart';
        let flightsDateEndSelector = '#FlightsDateEnd';
        let adultAmountSelector = '.form-icon-left ul li:nth-child(1)';
        let childAmountSelector = '.form-icon-left ul li:nth-child(2)';
        let infantAmountSelector = '.form-icon-left ul li:nth-child(3)';
        let searchBtn = '[type="submit"]';

        // [0] Open a page
        browser.url("https://www.phptravels.net/home");

        // [1] Select Flights tab
        $(flightstabSelector).click();
        browser.pause(3000);

        // [2] Select First class
        $(classDropdownSelector).selectByVisibleText('first');

        // [3] Select Round trip
        $(tripTypeSelector).click();

        // [4] Enter From
        $(locationFromSelector).setValue('Cali');

        // [5] Enter To
        $(locationToSelector).setValut('New York');

        // [6] Select Depart date / Select Return date
        $(flightsDateStartSelector).setValue('2021/04/30');

        // [7] 3 adults, 2 childs, 1 infants

        // [8] Clicking to Search button
        $(searchBtn).click();
        // [9] Select a flight

        // [10] Book a tiket

    });

});