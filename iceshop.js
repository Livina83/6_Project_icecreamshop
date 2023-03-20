window.onload = (event) => {
  const input1 = document.getElementById("input1");
  const input2 = document.getElementById("input2");
  const input3 = document.getElementById("input3");
  const cone3 = document.getElementById("cone3");
  const coneRB = document.getElementById("cone");

  const totalElement = document.getElementById("total");
  const errorMessage = document.getElementById("error-message");

  [input1, input2, input3].forEach((input) => {
    input.addEventListener("input", () => {
      const total =
        Number(input1.value) + Number(input2.value) + Number(input3.value);
      totalElement.innerText = total;

      if (total == 3 && coneRB.checked) {
        cone3.style.display = "block";
      }

      console.log("coneRB.checked" + coneRB.checked);

      if (total > 3) {
        errorMessage.innerText = "NO MORE THAN 3 SCOOPS!";
        input1.setCustomValidity("invalid");
      } else {
        errorMessage.innerText = "";
        input1.setCustomValidity("");
      }
    });
  });
};
