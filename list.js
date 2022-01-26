window.addEventListener("load", function () {
  const div1 = document.querySelector("#list");
  const url = "http://localhost:3000/api/events";

  // sending request
  fetch(url)
    .then((response) => {
      return response.json(); // converting byte data to json
    })
    .then((data) => {
      console.log(data);

      data.map((jeden_element) => {
        console.log(jeden_element);
        const {
          title,
          description,
          eventType,
          place,
          date,
          author,
          isAdult,
          createdAt,
        } = jeden_element;
        div1.innerHTML += `<div class="event">
       <div class="img"><img width="150px" height="150px" src="img/pizza.png" alt="pizza" /></div>
       <div class="txt">
         <h1 class="title">${title}</h1>
         <p class="description">
         ${description}
         </p>
         <div class="bottom">
           <p class="date">Data: ${date}</p>
           <p class="place">Miejsce: ${place}</p>
           <p class="author">Gospodarz: ${author}</p>
         </div>

       </div>
     </div>`;
      });
    })
    .catch((error) => alert("Error fetching posts"));
});
