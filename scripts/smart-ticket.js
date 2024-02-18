const buy = document.getElementById('buy-tickets');
const ticketPage = document.getElementById('bus-routes');
buy.addEventListener('click', function () {
    ticketPage.scrollIntoView({ behavior: "smooth", block: "start" })
})