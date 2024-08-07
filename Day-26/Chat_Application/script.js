let username;

function joinChat() {
    const usernameInput = document.getElementById('username');
    username = usernameInput.value.trim();

    if (username) {
        document.getElementById('login-container').classList.add('hidden');
        document.getElementById('chat-container').classList.remove('hidden');
    }
}

const socket = new WebSocket('ws://localhost:8080');

socket.addEventListener('open', () => {
    console.log('Connected to the WebSocket server');
});

socket.addEventListener('message', (event) => {
    console.log('Message from server:', event.data);
    const { sender, message } = JSON.parse(event.data);
    displayMessage(message, sender);
});

socket.addEventListener('close', () => {
    console.log('Disconnected from the WebSocket server');
});

function sendMessage() {
    const messageInput = document.getElementById('message');
    const message = messageInput.value.trim();

    if (message) {
        const messageData = JSON.stringify({ sender: username, message });
        
        socket.send(messageData);

        displayMessage(message, username);

        messageInput.value = '';
    }
}

function displayMessage(message, sender) {
    const output = document.getElementById('output');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender === username ? 'client' : 'server');

    const usernameElement = document.createElement('span');
    usernameElement.classList.add('username');
    usernameElement.textContent = sender;

    const textElement = document.createElement('span');
    textElement.textContent = message;

    messageElement.appendChild(usernameElement);
    messageElement.appendChild(textElement);

    output.appendChild(messageElement);

    output.scrollTop = output.scrollHeight;
}

document.getElementById('message').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

document.getElementById('send').addEventListener('click', sendMessage);
