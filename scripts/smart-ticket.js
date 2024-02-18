const buy = document.getElementById('buy-tickets');
const ticketPage = document.getElementById('bus-routes');
buy.addEventListener('click', function () {
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
            selectionColor(i);
            setText('booked-seats', bookedSeats);
            setText('seats-left', seatsLeft);
        }
        if (bookedSeats > 4) {
            window.alert("Maxium seat limit reached");
            return 0;
        }
    })
}