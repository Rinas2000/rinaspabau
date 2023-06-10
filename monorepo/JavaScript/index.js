function shuffleValues() {
  var checkboxes = Array.from(
    document.querySelectorAll('input[type="checkbox"]')
  );
  var parentNode = checkboxes[0].parentNode.parentNode;

  for (var i = checkboxes.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = checkboxes[i].parentNode;
    parentNode.insertBefore(checkboxes[j].parentNode, checkboxes[i].parentNode);
    parentNode.insertBefore(temp, checkboxes[j].parentNode);
  }
}

function changeValues() {
  var checkboxes = document.querySelectorAll('input[type="checkbox"]');
  var checkboxesval = document.querySelectorAll(".check-value");

  checkboxes.forEach(function (checkbox, index) {
    checkbox.value = "Check Box " + (index + 1);

    checkboxesval[index].innerHTML = checkbox.value;
  });
}

function showSelectedValues() {
  const checkboxes = document.getElementsByName("checkbox");
  const selectedValues = Array.from(checkboxes)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value);

  if (selectedValues.length === 0) {
    document.getElementById("selectedValues").textContent =
      "No checkbox is selected";
  } else {
    document.getElementById("selectedValues").textContent =
      selectedValues.join(", ");
  }
}
