

document.addEventListener('DOMContentLoaded', function () {
  let wrapper = document.createElement('div');
  let button = document.createElement('button');
  button.innerText = 'Add Square!';
  button.onclick = mydiv;
  wrapper.appendChild(button);
  document.body.appendChild(wrapper);

});

function mydiv() {

  let squares = document.getElementsByClassName("square");
  let numSquares = squares.length;
  let index = numSquares ? parseInt(squares[numSquares - 1].id) + 1: 1;
  let div = document.createElement("div");

  div.className = "square";
  div.id = "" + index;
  div.innerHTML = "<span>Id = " + index + "</span>";
  div.onmouseover = mouseOver;
  div.onmouseout = mouseOut;

  div.onclick = function (event) {
    assignRandomColor(event);
  }

  div.ondblclick = function (event) {
    handleDeletes(event);
  }

  document.body.appendChild(div);
}

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

function assignRandomColor(event) {
  let target = event.target;
  let randColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  target.style["background-color"] = randColor;
}

function handleDeletes(event) {

  let divEl = event.target;
  let numId = parseInt(divEl.id);
  let isEven = numId % 2 == 0;

  if (isEven) {
    let nextSib = divEl.nextSibling;
    if (nextSib && nextSib.className == "square") {
      nextSib.remove();
    } else {
      alert("No Next");
    }
    
  } else {
    let prevSib = divEl.previousSibling;
    if (prevSib && prevSib.className == "square") {
      prevSib.remove();
    } else {
      alert("No Previous");
    }

  }
};
