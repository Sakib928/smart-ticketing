function selectionColor(elementId) {
    const element = document.getElementById(elementId).classList;
    element.add('theme-bg');
}
function setText(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}
function buttonEnabler(buttonId) {
    const button = document.getElementById(buttonId).classList;
    button.remove("btn-disabled");
}
function buttonDisabler(buttonId) {
    const button = document.getElementById(buttonId).classList;
    button.add("btn-disabled");
}

function tableCreate(seatID) {
    const table = document.getElementById("thead");
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
function discountEnable(coupon, totalPrice) {
    showElement('discount-row');
    if (coupon === "NEW15") {
        let discountPrice = totalPrice * 0.15;
        const grandTotal = totalPrice - discountPrice;
        setText('grand-total', grandTotal);
        let place = document.getElementById('discount');
        place.innerText = discountPrice;
        hideElement('coupon-field');
        return;
    }
    if (coupon === "Couple 20") {
        let discountPrice = totalPrice * 0.20;
        const grandTotal = totalPrice - discountPrice;
        setText('grand-total', grandTotal);
        let place = document.getElementById('discount');
        place.innerText = discountPrice;
        hideElement('coupon-field');
        return;
    }
    else {
        window.alert("Enter a valid coupon code");
        hideElement('discount-row');
    }
}
function hideElement(elementId) {
    let element = document.getElementById(elementId).classList;
    element.add("hidden");
}
function showElement(elementId) {
    let element = document.getElementById(elementId).classList;
    element.remove("hidden");
}