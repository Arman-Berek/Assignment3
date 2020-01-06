//1) Select the section with an id of container without using querySelector.
var cont = document.getElementById("container");

//2) Select the section with an id of container using querySelector.
var contWithQ = document.querySelector("#container");

//3) Select all of the list items with a class of "second".
var sec = document.getElementsByClassName("second");


// 4- Select a list item with a class of third, but only the list item inside of the ol tag.
document.querySelector("ol .third");

//5
var changeContainer = document.querySelector("#container");
changeContainer.innerText = "Hello!";


//8) Create a new li element
var newLi = document.createElement("li");

newLi.innerText = "four";

var ourUl = document.querySelector("ul");

ourUl.appendChild(newLi);

var allLi = document.querySelectorAll("ol li");

for(var i = 0; i < allLi.length; i++) {
    allLi[i].style.backgroundColor = "green";
}