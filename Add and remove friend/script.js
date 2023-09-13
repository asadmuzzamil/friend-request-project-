// Get references to the buttons and the container
const confirmButton = document.getElementById('btn-top');
const deleteButton = document.getElementById('btn-bottem'); // Corrected typo
const container = document.getElementById('container');

// Function to handle the "Confirm" button click
confirmButton.addEventListener('click', () => {
    // Hide both buttons
    confirmButton.style.display = 'none';
    deleteButton.style.display = 'none';

    // Create a message element
    const messageElement = document.createElement('div');
    messageElement.textContent = 'Friends now';
    messageElement.style.color = 'green';

    // Create a tick sign (you can use an image or an icon)
    const tickSign = document.createElement('span');
    tickSign.textContent = '✔';

    // Append the message and tick sign to the container
    container.appendChild(messageElement);
    container.appendChild(tickSign);
});

// Function to handle the "Delete" button click
deleteButton.addEventListener('click', () => {
    // Check if the container is present
    if (container) {
        // Remove the container from the DOM
        container.remove();
    }
});
