window.addEventListener("load", function () {
  const div1 = document.querySelector("#list");
  const url = "/api/events";
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!
  var yyyy = today.getFullYear();
  var counter = 0;

  if (dd < 10) {
    dd = "0" + dd;
  }

  if (mm < 10) {
    mm = "0" + mm;
  }

  let dateCalculation = yyyy + "-" + mm + "-" + dd;

  // sending request
  fetch(url)
    .then((response) => {
      return response.json(); // converting byte data to json
    })
    .then((data) => {
      data.map((jeden_element) => {
        const {
          eventTitle,
          eventDescription,
          eventCategory,
          eventVenue,
          eventDate,
          author,
          createdAt,
        } = jeden_element;
        div1.innerHTML += `<div class="event">
       <div class="img"><img width="150px" height="150px" src="img/pizza.png" alt="pizza" /></div>
       <div class="txt">
         <h1 class="title">${eventTitle}</h1>
         <p class="description">
         ${eventDescription}
         </p>
         <div class="bottom">
           <p class="date">Data: ${eventDate}</p>
           <p class="place">Miejsce: ${eventVenue}</p>
           <p class="author">Organizator: ${author}</p>
         </div>

       </div>
     </div>`;
        if (eventDate < dateCalculation) {
          const div2 = document.getElementsByClassName("title")[counter];
          div2.innerHTML += " / NIEAKTUALNE";
          document.getElementsByClassName("event")[counter].style.background =
            "rgb(144 144 144)";
          console.log(eventDate);
          console.log(dateCalculation);
        }
        counter += 1;
      });
    })
    .catch((error) => alert("Error fetching posts"));
});
