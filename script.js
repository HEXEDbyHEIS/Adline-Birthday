function checkPin() {

    const pin = document.getElementById("pin").value;
    const message = document.getElementById("message");

    const correctPin = "1234";

    if (pin === correctPin) {

        // Hide the PIN screen
        document.getElementById("pin-screen")
            .classList.add("hidden");

        // Show the countdown
        document.getElementById("countdown-screen")
            .classList.remove("hidden");

        startCountdown();

    } else {

        message.textContent =
            "Hmmmm... nice try Miss Deraaaa 😭🎀";

    }
}


function startCountdown() {

    let timeLeft = 10;

    const countdown = document.getElementById("countdown");

    // Show the starting number immediately
    countdown.textContent =
        "00 : 00 : " + String(timeLeft).padStart(2, "0");


    const timer = setInterval(function() {

        timeLeft--;

        if (timeLeft >= 0) {

            countdown.textContent =
                "00 : 00 : " + String(timeLeft).padStart(2, "0");

        }


        if (timeLeft < 0) {

            clearInterval(timer);

            // Hide countdown
            document.getElementById("countdown-screen")
                .classList.add("hidden");

            // Show birthday screen
            document.getElementById("birthday-screen")
                .classList.remove("hidden");

        }

    }, 1000);
}


function openLetter() {

    document.getElementById("birthday-screen")
        .classList.add("hidden");

    document.getElementById("letter-screen")
        .classList.remove("hidden");

}
function openEnvelope() {

    const envelope = document.querySelector(".envelope");

    envelope.classList.toggle("open");

}
function showGallery() {

    document.getElementById("letter-screen").classList.add("hidden");

    document.getElementById("gallery-screen").classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function showFinalScreen() {

    document.getElementById("gallery-screen").classList.add("hidden");

    document.getElementById("final-screen").classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
function openEasterEgg() {

    document.getElementById("easter-egg")
        .classList.remove("hidden");

}


function closeEasterEgg() {

    document.getElementById("easter-egg")
        .classList.add("hidden");

}