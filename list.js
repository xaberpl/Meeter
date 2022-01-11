window.addEventListener("load", function () {
    const div1 = document.querySelector("#list");
    const url = "http://localhost:3000/api/users";
    
// sending request
fetch(url).then((response) => {
        
    return response.json();  // converting byte data to json
    
}).then(data => {
    console.log(data)      
    
    data.map((jeden_element)=>{
        console.log(jeden_element)
        const {firstName, lastName, email, password, password2, datepicker} = jeden_element;
       div1.innerHTML+=`<div style="display:flex;flex-direction:column;height:100px;width:100%">${firstName} ${password}</div>`       
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