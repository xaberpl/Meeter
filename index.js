window.addEventListener('load',function(){

document.getElementById('button').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "flex";
});

document.querySelector('.close').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "none";
});

// document.getElementById('xd').addEventListener("click", function() {
// 	alert("XDDDDDDDDDD")
// });



});
