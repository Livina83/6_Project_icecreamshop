function calculateTotal() {
  const vanilla = parseInt(document.getElementById("vanilla").value) || 0;
  const chocolate = parseInt(document.getElementById("chocolate").value) || 0;
  const strawberry = parseInt(document.getElementById("strawberry").value) || 0;

  const cone3 = document.getElementById("cone3");
  const coneRB = document.getElementById("cone");

  const totalScoops = vanilla + chocolate + strawberry;
  if (totalScoops > 3) {
    alert("You can't have more than 3 scoops of ice cream.");
    return;
  }

  const selectedFlavors = [];
  if (vanilla > 0) {
    selectedFlavors.push(vanilla + " scoop(s) of vanilla");
  }
  if (chocolate > 0) {
    selectedFlavors.push(chocolate + " scoop(s) of chocolate");
  }
  if (strawberry > 0) {
    selectedFlavors.push(strawberry + " scoop(s) of strawberry");
  }

  const flavorList = document.getElementById("flavorList");
  flavorList.innerHTML = "";
  if (selectedFlavors.length > 0) {
    const listItems = selectedFlavors.map(function (flavor) {
      return "<li>" + flavor + "</li>";
    });
    flavorList.innerHTML = "<ul>" + listItems.join("") + "</ul>";
  }

  document.getElementById("total").value = totalScoops;
  if (total == 3 && coneRB.checked) {
    console.warn("hallo", total);
    cone3.style.display = "block";
  }
}
