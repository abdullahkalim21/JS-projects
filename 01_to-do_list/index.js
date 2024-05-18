let enterButton = document.getElementById("enter");
let input = document.getElementById("tasks");
let ol = document.querySelector("ol");
let item = document.getElementById("list-items");

function inputLength() {
    return input.value.length;
}
function listLength() {
    return item.length;
}
function createListElements() {
    let li = document.createListElements("li");
    li.appendChild(document.createTextNode(input.value));
    ol.appendChild(li);
    input.value = "";
}
function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.which == 13) {
        createListElements();
    }
}
enterButton.addEventListener("click", addListAfterKeypress);
input.addEventListener("keypress", addListAfterKeypress);