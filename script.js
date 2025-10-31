// =========================================================
// ZAROORI: Apni Behen ke Birthday ki Sahi Date aur Time yahaan set karein.
// Format: "Month Day, Year Hour:Minute:Second"
// Example: "Nov 20, 2026 00:00:00"
// =========================================================
const birthdayDate = new Date("Nov 10, 2025 00:00:00").getTime();

// Har second update karne ke liye interval set karein
const countdownInterval = setInterval(function() {

    // Current time lein
    const now = new Date().getTime();

    // Remaining time calculate karein
    const distance = birthdayDate - now;

    // Time units calculate karein
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // HTML mein result display karein (.static-time element mein)
    const countdownElement = document.querySelector(".static-time");
    if (countdownElement) {
        countdownElement.innerHTML = days + " Days : " + hours + " Hours : "
            + minutes + " Mins : " + seconds + " Secs ";
    }

    // =========================================================
    // Agar countdown khatam ho jaaye (Distance is less than 0)
    // =========================================================
    if (distance < 0) {
        clearInterval(countdownInterval); // Timer roken

        // HTML elements ko target karein
        const cake = document.querySelector(".bouncing-cake");
        const cakeContainer = document.querySelector(".cake-container");
        const wish = document.getElementById("birthday-wish");
        
        // 1. Countdown ko Birthday Wish se Badlein
        if (countdownElement) countdownElement.innerHTML = "It's Her Birthday!";
        
        // 2. Cake Bouncing Animation roken aur position change karein
        if (cake) cake.style.animation = "none";
        if (cakeContainer) cakeContainer.style.paddingTop = "100px"; 

        // 3. 'Happy Birthday Sister' message ko emphasize karein
        if (wish) {
            wish.style.display = "block";
            wish.style.fontSize = "5em";
            wish.style.color = "#ff3366"; // Naya color
        }

        // 4. Sprinkles/Confetti Fire karein!
        // Yeh 'confetti' function tabhi kaam karega jab aapne library ka link HTML mein dala hoga
        
        // First big burst
        confetti({
            particleCount: 1500,
            spread: 360,
            startVelocity:70,
            origin: { x: 0.5, y: 0.5 }, // Screen ke beech se
        });

        // Second slightly smaller burst thodi der baad
        setTimeout(() => {
            confetti({
                particleCount: 1000,
                spread: 360,
                startVelocity: 40,
                origin: { x: 0.5, y: 0.5 },
            });
        }, 800); 
        
        // Side se bhi bursts
        confetti({
            particleCount: 1000,
            angle: 60, // Left side se
            spread: 55,
            origin: { x: 0 },
        });
        confetti({
            particleCount: 1000,
            angle: 120, // Right side se
            spread: 55,
            origin: { x: 1 },
        });

    }
}, 1000); // Har 1 second (1000 milliseconds) mein chalao