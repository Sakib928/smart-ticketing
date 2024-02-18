function selectionColor(elementId) {
    const element = document.getElementById(elementId).classList;
    element.add('theme-bg');
    console.log(element);
}
function setText(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}
function buttonEnabler(buttonId) {
    const button = document.getElementById(buttonId).classList;
    button.remove("btn-disabled");
}