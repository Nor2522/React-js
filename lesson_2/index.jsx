//  state and event handler

const root = ReactDOM.createRoot(document.getElementById("root"));

function ChatInput() {
  return (
    <>
      <input type="text" />
      <button onClick={sendMessage}>send</button>
    </>
  );
}

function ChatMessage({ sender, message }) {
  return (
    <div>
      {sender === "robot" && <img src="robot.svg" alt="robot img" width="50" />}
      {message}
      {sender === "user" && <img src="user.svg" alt="user img" width="50" />}
    </div>
  );
}

function ChatMessages() {
  const chatMessages = [
    { id: "id1", message: "hello chatbot", sender: "user" },
    { id: "id2", message: "hello! how can i help you?", sender: "robot" },
    { id: "id3", message: "can you get me todays date", sender: "user" },
    { id: "id4", message: "today is september 27", sender: "robot" },
  ];

  return (
    <>
      {chatMessages.map((chatmessage) => {
        return (
          <ChatMessage
            message={chatmessage.message}
            sender={chatmessage.sender}
            key={chatmessage.id}
          />
        );
      })}
    </>
  );
}
function sendMessage() {
  ChatMessages.push({
    id:crypto.randomUUID(),
    message:"test",
    sender:'user'

  })
  console.log(ChatMessages)
}
function App() {
  return (
    <>
      <ChatInput />
      <ChatMessages />
    </>
  );
}

root.render(<App />);
