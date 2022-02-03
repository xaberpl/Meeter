function myFunction() {
  var elements = document.getElementsByName("input");
  for (var i = 0; i < elements.length; i++) {
    elements[i].disabled = false;
  }
}

window.addEventListener("load", function () {
  document.getElementById("editButton").addEventListener("click", function () {
    document.querySelector(".bg-modal").style.display = "flex";
  });

  document.querySelector(".close").addEventListener("click", function () {
    document.querySelector(".bg-modal").style.display = "none";
  });
});
