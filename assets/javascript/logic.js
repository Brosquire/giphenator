$(document).ready(() => {
  const API_URL = process.env.API_URL;
  const API_KEY = process.env.KEY;
  //Giph initial loader function
  (() => {
    let queryURL = API_URL + "search?q=greenbaypackers" + API_KEY + "&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(response => {
      console.log(response);
    });
  })();
});
