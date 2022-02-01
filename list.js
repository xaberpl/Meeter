window.addEventListener("load", function () {
  const div1 = document.querySelector("#list");
  const url = "/api/events";

  // sending request
  fetch(url)
    .then((response) => {
      return response.json(); // converting byte data to json
    })
    .then((data) => {
      //console.log(data)

      data.map((jeden_element) => {
        console.log(jeden_element);
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
      });
    })
    .catch((error) => alert("Error fetching posts"));
});
