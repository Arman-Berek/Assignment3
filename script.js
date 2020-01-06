// 1 - Select the section with an id of container without using querySelector.
var cont = document.getElementById("container");

// 2 - Select the section with an id of container using querySelector.
var contWithQ = document.querySelector("container");

// 3 - Select all of the list items with a class of "second".
var sec = document.getElementsByClassName("second");

// 4- Select a list item with a class of third, but only the list item inside of the ol tag.
document.querySelector("ol .third");

// 5 - Give the section with an id of container the text "Hello!".
var changeContainer = document.querySelector("#container");
changeContainer.innerText = "Hello!";

// 6 - Add the class main to the div with a class of footer.
var getFooter = document.querySelector(".footer");
getFooter.classList.add("main");

// 7 - Remove the class main on the div with a class of footer.
var getFooterAgain = document.querySelector(".footer");
getFooterAgain.classList.remove("main");

//9 -