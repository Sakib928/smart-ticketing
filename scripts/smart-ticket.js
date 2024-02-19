const buy = document.getElementById('buy-tickets');
const ticketPage = document.getElementById('bus-routes');
buy.addEventListener('click', function () {
    ticketPage.scrollIntoView({ behavior: "smooth", block: "start" })
})
const buy2 = document.getElementById('nav-btn');
const ticketPage2 = document.getElementById('bus-routes');
buy2.addEventListener('click', function () {
    ticketPage.scrollIntoView({ behavior: "smooth", block: "start" })
})
let seatStatus = [];
for (let i = 0; i < 40; i++) {
    seatStatus[i] = 0;
}
let bookedSeats = 0;
let seatsLeft = 40;
for (let i = 0; i < 40; i++) {
    let element = document.getElementById(i);
    element.addEventListener('click', function () {
        bookedSeats++;
        seatsLeft--;
        if (seatStatus[i] == 0 && bookedSeats <= 4) {
            seatStatus[i] = 1;
            tableCreate(i);
            selectionColor(i);
            setText('booked-seats', bookedSeats);
            setText('seats-left', seatsLeft);
            setText('total-price', bookedSeats * 550);
            setText('grand-total', bookedSeats * 550);
            if (bookedSeats == 4) {
                buttonEnabler('apply');
                let applyButton = document.getElementById('apply');
                applyButton.addEventListener('click', function () {
                    let couponText = document.getElementById('coupon-code').value;
                    let ticketPrice = bookedSeats * 550;
                    discountEnable(couponText, ticketPrice);
                })
            }
        }
        if (bookedSeats > 4) {
            window.alert("Maxium seat limit reached");
            return 0;
        }
    })
}
let nameCheck = document.getElementById('name');
let nameOkay = 0;
nameCheck.addEventListener('input', function () {
    nameOkay = 1;
})
let numCheck = document.getElementById('number');
let numOkay = 1;
numCheck.addEventListener('input', function () {
    let numText = document.getElementById('number').value;
    for (let i = 0; i < numText.length; i++) {
        let check = numText.charCodeAt(i);
        if (check < 48 || check > 57) {
            numOkay = 0;
            alert("Invalid number.Refresh and try again");
            break;
        }
    }
    if (nameOkay == 1 && numOkay == 1) {
        buttonEnabler("next");
    }
})

const next = document.getElementById('next');
console.log(next)
next.addEventListener('click', function () {
    const toShow = document.getElementById('my_modal_1');
    toShow.showModal();
})
