//1) Select the section with an id of container without using querySelector.
val cont = document.getElementById("container");

//2) Select the section with an id of container using querySelector.
val contWithQ = document.querySelector("container");

//3) Select all of the list items with a class of "second".
val sec = document.getElementsByClassName("second");


// 4- Select a list item with a class of third, but only the list item inside of the ol tag.
document.querySelector("ol .third");

//5
var changeContainer = document.querySelector("#container");
changeContainer.innerText = "Hello!";