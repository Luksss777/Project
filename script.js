const chatWindow = document.getElementById("chatWindow");
const chatInput = document.getElementById("chatInput");
const container = document.getElementById("message-container");

function openChat() {
  chatWindow.classList.add("active");
}

function closeChat() {
  chatWindow.classList.remove("active");
}

function sendMessage() {
  const text = chatInput.value.trim();
  if (text !== "") {
    const msgHTML = `
                    <div class="message-wrapper">
                        <div class="message sent">${text}</div>
                        <div class="status-text">Sent</div>
                    </div>
                `;
    container.insertAdjacentHTML("beforeend", msgHTML);
    chatInput.value = "";
    container.scrollTop = container.scrollHeight;
  }
}

function handleKey(e) {
  if (e.key === "Enter") {
    sendMessage();
  }
}
