function makeMeAnElement ( elementType, className, content ){
  var newElement = document.createElement( elementType );
  newElement.className = className;
  newElement.innerHTML = content;

  var contentContainer = document.querySelector( '#contentContainer' );
  contentContainer.appendChild( newElement );
}

/*If a person is requested, display the following information:

Name, in an <h2> tag
Gender, in an <p> tag
Species (only get the first species if there are multiple) (only display the name), in an <p> tag*/

function formattingForPeople ( contentObject ){
  makeMeAnElement( 'h2', 'name', contentObject.name );
  makeMeAnElement( 'p', 'gender', contentObject.gender );

  var requestSpecies = new XMLHttpRequest();
  requestSpecies.addEventListener( 'load', function (){
    var response = JSON.parse( this.responseText );
    console.log( response );
    makeMeAnElement('p', 'species', response.name );
  } );
  requestSpecies.open( 'GET', contentObject.species );
  requestSpecies.send();


}

function clearContents (){
  var contentContainer = document.querySelector('#contentContainer' );
  contentContainer.innerHTML = "";
}

( function (){

  var requestResourceButton = document.getElementById( 'requestResourceButton' );
  var resourceType = document.querySelector( '#resourceType' );
  var resourceId = document.querySelector( '#resourceId' );

  requestResourceButton.addEventListener( 'click', function (){
    clearContents();

    var urlShard = resourceType.value + '/' + resourceId.value + '/';
    var newXhrRequest = new XMLHttpRequest();
    newXhrRequest.addEventListener( 'load', function(){

      var targetContentContainer = document.querySelector( '#contentContainer' );
      var formattingType = resourceType.value;
      var content = JSON.parse( this.responseText );
      console.log( 'formatting type ', formattingType );
      switch( formattingType ) {
        case 'people':
          console.log( 'people format' );
          formattingForPeople( content );
          break;
        case 'planets':
          console.log( 'planet format' );
          break;
        case 'starships':
          console.log( 'starship format' );
          break;
        default:
          break;
      }

    } );
    newXhrRequest.open( 'GET', 'http://swapi.co/api/' + urlShard );
    newXhrRequest.send();
  } );

} )();
/*
A request to the SWAPI api should be initiated when the button is clicked. Information that comes back from the API should be displayed in the body of the html. Additional html elements should be created to properly parse, display and format the data in a presentable way.

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
*/