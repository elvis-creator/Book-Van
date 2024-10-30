const seats = document.querySelectorAll('.seat'); // Only select passenger seats
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
    let allBooked = true; // Start by assuming all seats are booked

    // Loop through each seat to check their status
    for (let i = 0; i < seats.length; i++) {
        if (seats[i].innerText !== 'Booked') {
            allBooked = false; // If any seat is not booked, set to false
            break; // Exit the loop early if we find an unbooked seat
        }
    }

    // If all seats are booked, update the driver seat
    if (allBooked) {
        driverSeat.innerText = 'On the Move';
        driverSeat.style.backgroundColor = 'blue';
    }
}











/*
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
        let allBooked = true; // Start by assuming all seats are booked

        // Loop through each seat to check their status
        for (let i = 0; i < seats.length; i++) {
            if (seats[i].innerText !== 'Booked') {
                allBooked = false; // If any seat is not booked, set to false
                break; // Exit the loop early if we find an unbooked seat
            }
        }

        // If all seats are booked, update the driver seat
        if (allBooked) {
            driverSeat.innerText = 'On the Move';
            driverSeat.style.backgroundColor = 'blue';
        }
    }








    /*
    function checkAllBooked() {
        const allBooked = Array.from(seats).every(seat => seat.innerText === 'Booked');

        if (allBooked) {
            driverSeat.innerText = 'On the Move';
            driverSeat.style.backgroundColor = 'blue';
        }
    }
*/
