

document.addEventListener('DOMContentLoaded', function () {
  let wrapper = document.createElement('div');
  let button = document.createElement('button');
  button.innerText = 'Add Square!';
  button.onclick = mydiv;
  wrapper.appendChild(button);
  document.body.appendChild(wrapper);

});

function mydiv() {

  let index = document.getElementsByClassName("square").length;
  let div = document.createElement("div");
 
  div.className = "square";
  div.id = "" + index;
  div.innerHTML = "<span>Id = " + index + "</span>";
  div.onmouseover = mouseOver;
  div.onmouseout = mouseOut;
   div.onclick = function (event) {
    assignRandomColor(event);
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
  parseInt(target.id, 10);
  let tt = event.target.id;

}
