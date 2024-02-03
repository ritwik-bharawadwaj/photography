document.addEventListener("DOMContentLoaded", function () {
    const yesButton = document.getElementById("yesButton");
    const noButton = document.getElementById("noButton");

    yesButton.addEventListener("click", function () {
        confetti();
        setTimeout(function () {
            redirectToAnotherPage();
        }, 2500); // Adjust the delay time in milliseconds as needed
    });

    noButton.addEventListener("click", function () {
        moveNoButton();
    });

    function redirectToAnotherPage() {
        // Redirect to another page (change "anotherPage.html" to the desired page)
        window.location.href = "fireworks.html";
    }

    function moveNoButton() {
        // Move the "No" button to a random position on the page
        const maxX = window.innerWidth - noButton.clientWidth;
        const maxY = window.innerHeight - noButton.clientHeight;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        noButton.style.position = "absolute";
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;

        // Optionally, you can add additional logic to avoid overlapping with other elements.
    }
});
