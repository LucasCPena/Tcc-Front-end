document.addEventListener('DOMContentLoaded', function() {
    var reservations = [];

    flatpickr("#date", {
        dateFormat: "Y-m-d",
        minDate: "today",
        locale: 'pt'
    });

    function displayReservations() {
        var reservationList = document.getElementById('reservation-list');
        reservationList.innerHTML = '';

        for (var i = 0; i < reservations.length; i++) {
            var listItem = document.createElement('li');
            listItem.textContent = "Sala reservada " + reservations[i].start;
            reservationList.appendChild(listItem);
        }
    }

    function addReservation() {
        var selectedDate = document.getElementById('date').value;

        if (selectedDate) {
            reservations.push({ start: selectedDate });
            displayReservations();
            alert('Reserva cadastrada com sucesso!');
        }
    }

    document.querySelector('.search-container button').addEventListener('click', addReservation);
});
