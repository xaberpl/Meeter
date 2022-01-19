const form = document.getElementById("form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const datePicker = document.getElementById("datePicker");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
  const fn = document.getElementById("fn");
  const ln = document.getElementById("ln");
  const em = document.getElementById("em");
  const pd = document.getElementById("pd");
  const pd2 = document.getElementById("pd2");
  const dp = document.getElementById("dp");

  if (
    fn.className === "form-control success" &&
    ln.className === "form-control success" &&
    em.className === "form-control success" &&
    pd.className === "form-control success" &&
    pd2.className === "form-control success" &&
    dp.className === "form-control success"
  ) {
    form.submit();
  }
});

function checkInputs() {
  // trim to remove the whitespaces
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();
  // PO ZAKOMENTOWANIU TEGO DZIAŁA
  const dateValue = datePicker.value.trim();
  console.log(dateValue);
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


  let dateCalculation = yyyy - 18 + "-" + mm + "-" + dd;


  //użycie regex'a do walidacji imion
  const userNameRegex =
    /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/u;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/u;
  if (firstNameValue.match(userNameRegex)) {
    setSuccessFor(firstName);
  } else {
    setErrorFor(firstName, "Imię niepoprawne");
  }
  if (lastNameValue.match(userNameRegex)) {
    setSuccessFor(lastName);
  } else {
    setErrorFor(lastName, "Nazwisko niepoprawne");
  }
  if (emailValue.match(emailRegex)) {
    setSuccessFor(email);
  } else {
    setErrorFor(email, "Email niepoprawny");
  }
  if (passwordValue.match(passwordRegex)) {
    setSuccessFor(password);
  } else {
    setErrorFor(password, "Utwórz bezpieczniejsze hasło");
  }
  if (password2Value === passwordValue) {
    setSuccessFor(password2);
  } else {
    setErrorFor(password2, "Podane hasła różnią się");
  }

  // //
  if (dateValue == "") {
    setErrorFor(datePicker, "Wybierz date");
  } else if (dateValue > dateCalculation) {
    setErrorFor(datePicker, "Jesteś za młody");
  } else {
    setSuccessFor(datePicker);
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
