function checkLoveAnswers(event) {
    event.preventDefault(); // Prevents the form from submitting the traditional way

    // Get user inputs
    var q1 = document.getElementById("q1").value.toLowerCase();
    var q2 = document.getElementById("q2").value.toLowerCase();
    var q3 = document.getElementById("q3").value.toLowerCase();

    // Define correct answers (allowing multiple correct answers)
    var correctAnswersQ1 = ["megamall", "mega mall"];
    var correctAnswersQ2 = ["14th june 23", "14-06-23", "14/06/23", "14 june 23", "14th june 2023", "14-06-2023", "14/06/2023", "14 june 2023"];
    var correctAnswersQ3 = ["class", "school", "11p"];

    // Check if the answers are correct
    if (
        correctAnswersQ1.includes(q1) &&
        correctAnswersQ2.includes(q2) &&
        correctAnswersQ3.includes(q3)
    ) {
        window.location.href = "success.html"; // Redirect to success page
    } else {
        alert("Sorry, not all answers are correct. Please try again.");
    }
}