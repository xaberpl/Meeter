window.addEventListener("load", function () {
    const div1 = document.querySelector("#list");
    const url = "http://localhost:3000/api/users";
    
// sending request
fetch(url).then((response) => {
        
    return response.json();  // converting byte data to json
    
}).then(data => {
    //console.log(data)      
    for (let i = 0; i < data.length; i++) {              
    const {firstName, lastName, email, password, password2, datepicker} = data[i];
    //document.getElementById("demo").innerHTML =data[0].firstName;
    
    
    var array = [firstName, lastName, email];
array.forEach(function(el) {
    var div2 = document.createElement("div");
    div2.className = "User";
    div2.innerHTML = el;
    div1.appendChild(div2);
    
});
var div3 = document.createElement("div");
    div3.innerHTML = "-------------------------------------------";
    div1.appendChild(div3);
    // // list
    // const ul = document.createElement('ul');
    
    // const li1 = document.createElement('li1');
    // const li2 = document.createElement('li2');
    // const li3 = document.createElement('li3');
    // const li4 = document.createElement('li4');
    
    // // adding content    
    // li1.textContent = firstName;
    // li2.textContent = lastName;
    // li3.textContent = email;
    // li4.textContent = i;

    // // appending to div element
    // div.appendChild(ul);
    // ul.appendChild(li1);
    // ul.appendChild(li2);
    // ul.appendChild(li3);
    // ul.appendChild(li4);
    
}
}
)
.catch(error => alert('Error fetching posts'));


})