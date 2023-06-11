// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("i");
  var txt = document.createTextNode("");
  span.className = "fa-solid fa-xmark float-end";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
function closeBtn() {
  var close = document.querySelectorAll(".fa-xmark");
  close.forEach(c => {
      c.onclick = function () {
          var iTag = this.parentElement;
          //iTag.style.display = "none";
          iTag.remove();
      }
  });
}
closeBtn();

// checked symbol when click
// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', (ev) => {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
    //console.log(ev)
    let icon = ev.target.childNodes[0]

    console.log(icon);
    icon.classList.toggle("d-none")
  }
}, false);

// alert function
const alertPlace = document.getElementById('alert')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  console.log(wrapper);
  alertPlace.appendChild(wrapper)
}

// create a new list
var add = document.querySelector("#addBtn");
add.addEventListener('click', () => {
  let input = document.getElementById("addNote").value;
  console.log(input);
  let li = document.createElement("LI");
  li.className = "list-group-item";
  li.innerHTML = `<i class="fa-solid fa-check me-2 d-none"></i>${input}`;

  if (input === "" || input === null || input === undefined) {
    console.log("hello");
    appendAlert("You must write something!", 'danger')
  } else {
    // li tag for add new list
    list.appendChild(li);
    appendAlert("Successfully added.", 'success');
  }
  
  // clear previour value
  document.getElementById("addNote").value = "";

  // close btn
  var span = document.createElement("I")
  span.className = "fa-solid fa-xmark float-end";
  li.appendChild(span);

  closeBtn();

})

