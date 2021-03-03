function logSubmit(event) {
  let name = pname.value;

  // Validate text fields, else create item
  if (name === "") {
    alert("Error: One or more fields are empty!");
  } else {
    // Consume API endpoint
    jsonInfo = pokeRequest(name.toLowerCase());

    // Add node with product info
    let pokemonList = document.getElementById("pokemonList");

    let newitem = document.createElement("div");
    newitem.setAttribute("class", "row");

    let nameCol = document.createElement("div");
    nameCol.setAttribute("class", "column");
    let priceCol = document.createElement("div");
    priceCol.setAttribute("class", "column");
    let deleteCol = document.createElement("div");
    deleteCol.setAttribute("class", "column");

    let newbtn = document.createElement("button");

    // Event to delete product
    newbtn.addEventListener("click", (event) => {
      let eleClicked = event.target.parentNode.parentNode;

      pokemonList.removeChild(eleClicked);
    });
    newbtn.appendChild(document.createTextNode("X"));

    nameCol.appendChild(document.createTextNode(name));
    deleteCol.appendChild(newbtn);

    newitem.appendChild(nameCol);
    newitem.appendChild(deleteCol);
    pokemonList.appendChild(newitem);

    // Display result and clean fields
    log.setAttribute("style", "color: black");
    log.textContent = "Added " + name;
    pname.value = "";

    document.getElementById("pname").focus();
  }
  event.preventDefault();
}

const form = document.getElementById("form");
const log = document.getElementById("log");
const pname = document.getElementById("pname");
form.addEventListener("submit", logSubmit);
