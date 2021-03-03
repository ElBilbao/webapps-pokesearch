function pokeRequest(name) {
  let ajaxPromise = new Promise((resolve, reject) => {
    // Initialize the HTTP request.
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://pokeapi.co/api/v2/pokemon/" + name);

    // Track the state changes of the request.
    xhr.onreadystatechange = function () {
      var DONE = 4;
      var OK = 200;
      if (xhr.readyState === DONE) {
        if (xhr.status === OK) {
          resolve(xhr.responseText);
        } else {
          reject(xhr.status);
        }
      }
    };
    // Send the request to send-ajax-data.php
    xhr.send(null);
  });

  let p = document.querySelector("p");
  ajaxPromise
    .then((okMessage) => {
      p.innerHTML = okMessage;
    })
    .catch((err) => {
      p.innerHTML = err;
    });
  // .finally(() => {console.log("whatever happens I am called")})
}
