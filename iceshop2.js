function calculateTotal() {
  let orderPlaced = false; // set to false initially
  const getValue = (id) => parseInt(document.getElementById(id).value) || 0;
  const [vanilla, chocolate, strawberry] = [
    "vanilla",
    "chocolate",
    "strawberry",
  ].map(getValue);

  const [cone1, cone2, cone3, coneRB] = ["cone1", "cone2", "cone3", "cone"].map(
    (id) => document.getElementById(id)
  );

  const [cup1, cup2, cup3, cupRB] = ["cup1", "cup2", "cup3", "cup"].map((id) =>
    document.getElementById(id)
  );

  const [none1, none2, none3, noneRB] = ["none1", "none2", "none3", "none"].map(
    (id) => document.getElementById(id)
  );

  const totalScoops = vanilla + chocolate + strawberry;
  if (totalScoops > 3) {
    alert("You can't have more than 3 scoops of ice cream.");
    return;
  }

  const selectedFlavors = [vanilla, chocolate, strawberry]
    .filter((flavor) => flavor > 0)
    .map(
      (flavor, index) =>
        `${flavor} scoop(s) of ${["vanilla", "chocolate", "strawberry"][index]}`
    );

  const flavorList = document.getElementById("flavorList");
  flavorList.innerHTML = "";
  if (selectedFlavors.length > 0) {
    const listItems = selectedFlavors.map(function (flavor) {
      return "<li>" + flavor + "</li>";
    });
    flavorList.innerHTML =
      "<ul class='no-bullets'>" + listItems.join("") + "</ul>";
  }

  /*const flavorList = document.getElementById("flavorList");
  flavorList.innerHTML = "";
  if (selectedFlavors.length > 0) {
    const listItems = selectedFlavors.map(function (flavor) {
      return "<li>" + flavor + "</li>";
    });
    flavorList.innerHTML = "<ul>" + listItems.join("") + "</ul>";
  }*/

  document.getElementById("total").value = totalScoops;
  if (coneRB.checked) {
    document.getElementById("cone" + totalScoops).style.display = "block";
  } else if (cupRB.checked) {
    document.getElementById("cup" + totalScoops).style.display = "block";
  } else if (noneRB.checked) {
    document.getElementById("none" + totalScoops).style.display = "block";
  }
}
