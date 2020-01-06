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

// 8 - Create a new li element
var newLi = document.createElement("li");

// 9 - Give the li the text "four".
newLi.innerText = "four";

// 10 - Append the li to the ul element.
var ourUl = document.querySelector("ul");
ourUl.appendChild(newLi);

// 11 - Loop over all of the lis inside the ol tag and give them a background color of "green".
var allLi = document.querySelectorAll("ol li");
for(var i = 0; i < allLi.length; i++) {
    allLi[i].style.backgroundColor = "green";
}
// 12 - Remove the div with a class of footer.
var getRidFooter = document.querySelector(".footer");
getRidFooter.remove();
