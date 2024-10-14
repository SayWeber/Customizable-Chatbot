const responses = {
    "What color is the sky?": "Ay, mi amor! ¡Ay, mi amor!",
    "You tell me that it's red": "Ay, mi amor! ¡Ay, mi amor!",
    "Where should I put my shoes?": "Ay, mi amor! ¡Ay, mi amor!",
    "You say,Put them on your head!": "Ay, mi amor! ¡Ay, mi amor!",
    "You make me un poco loco": "Un poquititito loco"
};

const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

const userAvatar = "user.webp"; // User avatar URL
const botAvatar = "boat.jpeg"; // Bot avatar URL

// Function to display messages in the chat box
function displayMessage(message, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    
    const avatar = document.createElement('img');
    avatar.className = "avatar";
    avatar.src = sender === 'user' ? userAvatar : botAvatar;
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    contentDiv.textContent = message;
    
    messageDiv.appendChild(avatar);
    messageDiv.appendChild(contentDiv);
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}

// Function to simulate bot typing
function simulateBotReply(response) {
    displayMessage("Typing...", 'bot');
    
    setTimeout(() => {
        const lastMessage = chatBox.lastChild;
        lastMessage.remove(); // Remove "Typing..." message
        displayMessage(response, 'bot');
    }, 1500); // Simulate typing delay
}

// Send button event listener
sendButton.addEventListener('click', () => {
    const message = userInput.value.trim();
    if (message) {
        displayMessage(message, 'user');
        const response = responses[message] || "I don't understand that.";
        simulateBotReply(response);
        userInput.value = '';
    }
});
