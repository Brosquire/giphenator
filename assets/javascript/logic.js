$(document).ready(() => {
  //Giph initial loader function
  const initialGiphGetter = () => {
    let basequeryURL =
      "https://api.giphy.com/v1/gifs/search?q=sports+greenbaypackers&api_key=9vTuLskEWKQPmQQvX6cL6ynEuxnBsLEb&limit=10";
    apiCall(basequeryURL);
  };

  //ajax api function
  const apiCall = params => {
    $.ajax({
      url: params,
      method: "GET"
    }).then(response => {
      console.log(response);
    });
  };

  //user search api giph function
  const userGiphGetter = () => {
    let userInput = $("#userInput");
    let userURL =
      "https://api.giphy.com/v1/gifs/search?q=sports+" +
      userInput +
      "&api_key=9vTuLskEWKQPmQQvX6cL6ynEuxnBsLEb&limit=10";

    apiCall(userURL);
  };

  initialGiphGetter();

  //on submit of user input function
  $(document).on("#submit", () => {
    userGiphGetter().then(console.log(data));
  });
});
