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

function tableCreate(tableID, seatID) {
    const table = document.getElementById(tableID);
    let newTableData = document.createElement('tr');
    let th1 = document.createElement('th');
    th1.innerText = document.getElementById(seatID).innerText;
    newTableData.appendChild(th1);
    table.appendChild(newTableData);
    let th2 = document.createElement('th');
    th2.innerText = "Economy";
    newTableData.appendChild(th2);
    table.appendChild(newTableData);
    let th3 = document.createElement('th');
    th3.innerText = "550"
    newTableData.appendChild(th3);
    table.appendChild(newTableData);

}
