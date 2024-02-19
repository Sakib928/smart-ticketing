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
        if (bookedSeats >= 1) {
            let numCheck = document.getElementById('number');
            numCheck.addEventListener('input', function () {
                buttonEnabler("next");
            })
        }
    })
}
const next = document.getElementById('next');
console.log(next)
next.addEventListener('click', function () {
    const toShow = document.getElementById('my_modal_1');
    toShow.showModal();
})
