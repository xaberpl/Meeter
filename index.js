window.addEventListener("load", function () {
  document.getElementById("button").addEventListener("click", function () {
    document.querySelector(".bg-modal").style.display = "flex";
  });

  document.querySelector(".close").addEventListener("click", function () {
    document.querySelector(".bg-modal").style.display = "none";
  });
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!
  var yyyy = today.getFullYear();

  if (dd < 10) {
    dd = "0" + dd;
  }

  if (mm < 10) {
    mm = "0" + mm;
  }
  
  document
    .getElementById("datePicker")
    .setAttribute("min", 1900 + "-" + 01 + "-" + 01);

  document
    .getElementById("datePicker")
    .setAttribute("max", yyyy + "-" + mm + "-" + dd);
});
