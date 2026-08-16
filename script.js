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

    launchFireworks();
}
function launchFireworks() {

    const fireworks = document.getElementById("fireworks");

    fireworks.innerHTML = "";

const positions = [
    { left: "15%", top: "22%" },
    { left: "84%", top: "20%" },
    { left: "50%", top: "13%" },
    { left: "10%", top: "62%" },
    { left: "90%", top: "58%" },
    { left: "24%", top: "40%" },
    { left: "76%", top: "42%" },
    { left: "50%", top: "80%" }
];

    positions.forEach(function(position, index) {

        setTimeout(function() {

            const firework = document.createElement("div");

            firework.className = "firework";

            firework.style.left = position.left;
            firework.style.top = position.top;

            fireworks.appendChild(firework);

            setTimeout(function() {
                firework.remove();
            }, 1700);

        }, index * 220);

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
