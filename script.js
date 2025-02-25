document.addEventListener("DOMContentLoaded", () => {
    const revealButton = document.getElementById("revealButton");
    const hiddenMessage = document.getElementById("hiddenMessage");

    // Event listener to show hidden content
    revealButton.addEventListener("click", () => {
        hiddenMessage.style.display = "block"; // Show hidden message
        revealButton.style.display = "none"; // Hide the button after clicking
    });
});
