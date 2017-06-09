/*
Construct your XHR requests in the app.js file by scraping the value from the input field.

A request to the SWAPI api should be initiated when the button is clicked. Information that comes back from the API should be displayed in the body of the html. Additional html elements should be created to properly parse, display and format the data in a presentable way.

If a person is requested, display the following information:

Name, in an <h2> tag
Gender, in an <p> tag
Species (only get the first species if there are multiple) (only display the name), in an <p> tag
If a planet is requested, display the following information:
Name, in an <h2> tag
Terrain, in an <p> tag
Population, in an <p> tag
a list of all Film names that this planet appeared in <li> tags wrapped in <ul>
If a starship is requested, display the following information:
Name, in an <h2> tag
Manufacturer, in an <p> tag
Starship Class, in an <p> tag
a list of all Film names that this starship appeared in <li> tags wrapped in <ul>
Display any xhr errors in the dom, so the user can see. For example, if a user inputs 99999 as an id, or potato. Display the error on the page.
Note: Go to https://swapi.co to preview the data that you will be requesting*/