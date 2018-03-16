
/**
 * This function is called when the DOM of the page is fully 
 * loaded and ready to be used.  (i.e. DOMContentLoaded)
 */
document.addEventListener('DOMContentLoaded', function () {

    // create the wrapper div
    let wrapper = document.createElement('div');

    // create the button and change its text value
    let button = document.createElement('button');
    button.innerText = 'Add Square!';

    // add a click event handler to the button calling the mydiv function
    button.onclick = function () {
        mydiv();
    }


    // append the button inside the wrapper, then append the wrapper to the document body
    wrapper.appendChild(button);
    document.body.appendChild(wrapper);

});

/** 
 * This function creates a square on the webpage with the right formatting, class, and id.
 * It is called from another function.  That function could be an event handler.
 */
function mydiv() {

    // get the number of elements with the class 'square' on the page (i.e. 0, 1, 2)
    let index = document.getElementsByClassName("square").length;

    // create a div with the class square an the id square-N, set the inner html to Id = N
    let div = document.createElement("div");
    div.className = "square";
    div.id = "square-" + index
    div.innerHTML = "<span>Id = " + index + "</span>";



    div.onmouseover = mouseOver;
    div.onmouseout = mouseOut;

    // append the div to the body of the webpage
    document.body.appendChild(div);
}


function mouseOver(event) {
    let target = event.target;
    let spanText = target.children[0];
    spanText.style.visibility = "visible";
}

function mouseOut(event) {
    let target = event.target;
    let spanText = target.children[0];
    spanText.style.visibility = "hidden";
}