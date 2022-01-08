window.addEventListener("load", function () {
    const div = document.querySelector("#list");
    const url = "http://localhost:3000/api/users";

    
// sending request
fetch(url).then((response) => {
        
    return response.json();  // converting byte data to json
    
}).then(data => {
    console.log(data)
    // console.log(data.json)
    let counter=0
    for (let i = 0; i < data.length; i++) {
        // code block to be executed
      
    const {firstName, lastName, email, password, password2, datepicker} = data[i];
    
    // list
    const ul = document.createElement('ul');
    const li1 = document.createElement('li1');
    const li2 = document.createElement('li2');
    const li3 = document.createElement('li3');
    const li4 = document.createElement('li4');
    // adding content
    
    li1.textContent = firstName;
    li2.textContent = lastName;
    li3.textContent = email;
    li4.textContent = i;

    // appending to div element
    div.appendChild(ul);
    div.appendChild(li1);
    div.appendChild(li2);
    div.appendChild(li3);
    div.appendChild(li4);
    
}
}
)
.catch(error => alert('Error fetching posts'));


})