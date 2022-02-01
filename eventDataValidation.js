const eventForm = document.getElementById("form");
const eventTitle = document.getElementById("eventTitle");
const eventDescription = document.getElementById("eventDescription");
const eventVenue = document.getElementById("eventVenue");
const eventDate = document.getElementById("eventDate");
const eventCategory = document.getElementById("eventCategory");

eventForm.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
  const ti = document.getElementById("ti");
  const dsc = document.getElementById("dsc");
  const ve = document.getElementById("ve");
  const date = document.getElementById("date");
  const cat = document.getElementById("cat");

  if (
    ti.className === "form-control success" &&
    dsc.className === "form-control success" &&
    ve.className === "form-control success" &&
    date.className === "form-control success" &&
    cat.className === "form-control success"
  ) {
    console.log("gites majonez");
    form.submit();
  }
});

function checkInputs() {
  // trim to remove the whitespaces
  const eventTitleValue = eventTitle.value.trim();
  const eventDescriptionValue = eventDescription.value.trim();
  const eventVenueValue = eventVenue.value.trim();
  const eventDateValue = eventDate.value.trim();
  const eventCategoryValue = eventCategory.value.trim();

  // const dateValue = datePicker.value.trim();

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

  let dateCalculation = yyyy + "-" + mm + "-" + dd;

  //użycie regex'a do walidacji imion
  const userNameRegex =
    /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
  if (eventTitleValue.match(userNameRegex)) {
    setSuccessFor(eventTitle);
  } else {
    setErrorFor(eventTitle, "Tytuł niepoprawny");
  }
  if (eventDescriptionValue.match(userNameRegex)) {
    setSuccessFor(eventDescription);
  } else {
    setErrorFor(eventDescription, "Uzupełnij opis wydarzenia");
  }
  if (eventVenueValue.match(userNameRegex)) {
    setSuccessFor(eventVenue);
  } else {
    setErrorFor(eventVenue, "Miejscowość niepoprawna");
  }
  // //
  if (eventDateValue == "") {
    setErrorFor(eventDate, "Wybierz date");
  } else if (eventDateValue < dateCalculation) {
    setErrorFor(eventDate, "Nie możesz tworzyć wydarzeń w przeszłości");
  } else {
    setSuccessFor(eventDate);
  }

  if (eventCategoryValue == "Kategoria wydarzenia") {
    setErrorFor(eventCategory, "Wybierz kategorię");
  } else {
    setSuccessFor(eventCategory);
  }
}
function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// data validation for create event page
