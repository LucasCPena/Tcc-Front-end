document.addEventListener('DOMContentLoaded', function() {
    var reservations = [
        { title: 'Reserva Sala 1', start: '08-10-2023' },
        { title: 'Reserva Sala 2', start: '10-10-2023' },
        { title: 'Reserva Sala 1', start: '12-10-2023' }
    ];

    function displayReservations(filteredReservations) {
        var reservationList = document.getElementById('reservation-list');
        reservationList.innerHTML = '';

        for (var i = 0; i < filteredReservations.length; i++) {
            var listItem = document.createElement('li');
            var startDateParts = filteredReservations[i].start.split('-');
            var formattedStartDate = `${startDateParts[0]}/${startDateParts[1]}/${startDateParts[2]}`;
            listItem.textContent = `Sala: ${filteredReservations[i].title}, Data: ${formattedStartDate}`;
            reservationList.appendChild(listItem);
        }
    }

    function searchReservations() {
        var selectedDate = document.getElementById('date').value;
        var filteredReservations = reservations.filter(function(reservation) {
            var startDateParts = reservation.start.split('-');
            var formattedStartDate = `${startDateParts[0]}/${startDateParts[1]}/${startDateParts[2]}`;
            return formattedStartDate.includes(selectedDate);
        });

        var reservationContainer = document.getElementById('reservation-container');

        if (filteredReservations.length > 0) {
            displayReservations(filteredReservations);
            reservationContainer.style.display = 'block';
        } else {
            reservationContainer.style.display = 'none';
        }
    }

    flatpickr("#date", {
        dateFormat: "d/m/Y", // Formato para o padrão brasileiro
        enableTime: false,
        altInput: true,
        altFormat: "d F Y", // Alterado para usar o formato de data em português
        minDate: "today",
        locale: 'pt'  // Adicionando a opção locale para português
    });

    // Adiciona um event listener para o botão Pesquisar
    document.querySelector('.search-container button').addEventListener('click', searchReservations);
});
