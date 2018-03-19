

document.addEventListener('DOMContentLoaded', function () {

  // create the wrapper div

  let wrapper = document.createElement('div');

  // create the button and change its text value

  let button = document.createElement('button');
  button.innerText = 'Add Square!';

  // add a click event handler to the button calling the mydiv function

  button.onclick = mydiv;


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
  div.id = "" + index;
  div.innerHTML = "<span>Id = " + index + "</span>";

  // The onmouseover event occurs when the mouse pointer is moved onto an element,
  //  or onto one of its children. Tip: This event is often used together with the
  // onmouseout event, which occurs when a user moves the mouse pointer out of an element.

  div.onmouseover = mouseOver;
  div.onmouseout = mouseOut;

  
  div.onclick = function(event) {
    assignRandomColor(event);
    handleDeletes(event);
  }


  // append the div to the body of the webpage
  document.body.appendChild(div);
}

// target event property returns the element that triffered the event - currentTarget refers 
// to the element whose event listener triggered the event.
// span - group inline elements in a doc
// visibility propertiy specifies whether or not an element is visible  default is visible

function mouseOver(event) {
  let t = event.target;
  let spanText = t.children[0];
  spanText.style.visibility = "visible";
}

function mouseOut(event) {
  let t = event.target;
  let spanText = t.children[0];
  spanText.style.visibility = "hidden";
  t.style["background-color"] = '#000000';
}




// convert a random 32bit integer to a hex string representation to assign a color




function assignRandomColor(event) {
  let target = event.target;
  let randColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  target.style["background-color"] = randColor;
}

function handleDeletes() {
  parseInt(target.id, 10);