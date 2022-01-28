window.addEventListener("load", function () {
  const div1 = document.querySelector("#list");
  const url = "/api/events";

  // sending request
  fetch(url).then((response) => {

    return response.json();  // converting byte data to json

  }).then(data => {
    //console.log(data)      

    data.map((jeden_element) => {
      console.log(jeden_element)
      const { title, description, eventType, place, date, author, isAdult, createdAt } = jeden_element;
      div1.innerHTML += `<div class="event">
       <div class="img"><img width="200px" height="200px" src="img/pizza.png" alt="pizza" /></div>
       <div class="txt">
         <h1 class="title">${title}</h1>
         <p class="description">
         ${description}
         </p>
         <div class="bottom">
           <p class="date">Data: ${date}</p>
           <p class="place">Miejsce: ${place}</p>
           <p class="author">Gospodarz: ${author}</p>
           <p class="createdAt"> Wydarzenie utworzone: ${createdAt}</p>
         </div>
       </div>
     </div>`
    })

    //     for (let i = 0; i < data.length; i++) {              
    //     const {firstName, lastName, email, password, password2, datepicker} = data[i];
    //     //document.getElementById("demo").innerHTML =data[0].firstName;


    //     var array = [firstName, lastName, email];
    // array.forEach(function(el) {
    //     var div2 = document.createElement("div");
    //     div2.className = "User";
    //     div2.innerHTML = el;
    //     div1.appendChild(div3);


    // });
    // var div3 = document.createElement("div");
    //     div3.innerHTML = "-------------------------------------------";
    //     div1.appendChild(div3);
  }

  )
    .catch(error => alert('Error fetching posts'));


})