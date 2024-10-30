
    const seats = document.querySelectorAll('.seat');
    const driverSeat = document.querySelector('.driver');

    seats.forEach(seat => {
        seat.addEventListener('click', () => {
            // Change the seat's text and background color to booked
            seat.innerText = 'Booked';
            seat.style.backgroundColor = 'red';
            checkAllBooked();
        });
    });

    function checkAllBooked() {
        const allBooked = Array.from(seats).every(seat => seat.innerText === 'Booked');

        if (allBooked) {
            driverSeat.innerText = 'On the Move';
            driverSeat.style.backgroundColor = 'blue';
        }
    }

