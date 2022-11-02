//html element and selector variables
let p = document.createElement("p");
let h1 = document.querySelector(".header");
let input = document.querySelector(".input");
let userInput;

//declare variable for ghost image

ghostImage = document.querySelector(".ghost-image");


//declare variables for all of the buttons

let hideMe = document.querySelector(".hide-button");
let showMe = document.querySelector(".show-button");
let updateImg = document.querySelector(".update-img-button");
let sendMsg = document.querySelector(".message-button");
let nameMe = document.querySelector(".name-button");




//create an onclick event for the Hide Me button
/*hide button variable*/hideMe.onclick = (function (){  
    ghostImage.style.display = "none";
});

//create an onclick event for the Show Me button

showMe.onclick = (function (){  
    ghostImage.style.display = "True";
});

//create an onclick event for the Update Img button

updateImg.onclick = (function (){  
    ghostImage.src = "https://i.giphy.com/media/kSFWKgsdyB0SSdMxap/giphy.webp";
});


//create an onclick event for the Send Message button

sendMsg.onclick = (function (){  
  userInput = input.value
  insertAdjacentHTML(beforeend, message)

});
//update the userInput variable by saving the value of the input

//use the insertAdjacentHTML method to append the userInput in a <p> tag




//create an onclick event for the Name Me button
sendMsg.onclick = (function (){  
    userInput = input.value
  h1.innerHTML = userInput
});
//update the userInput variable by saving the value of the input
//use the innerHTML method to update the h1 tag
