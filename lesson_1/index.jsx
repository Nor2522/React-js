//  import { createRoot } from "react-dom./client" when u wanna use import method

const root = ReactDOM.createRoot(document.getElementById("root"));

function ChatInput() {
  return (
    <>
      <input type="text" />
      <button>send</button>
    </>
  );
}

// cleaning code
function ChatMessage({ sender, message }) {
  // const chatmessages = props.message
  // const sender = props.sender
  // if (sender === "robot") {
  //   return (
  //   //   <div>
  //   //     {/* <img src="robot.svg" alt="robot img" width="50" />
  //   //     {message} */}

  //   //     {/* {chatmessages} */}
  //   //   </div>
  //   // );
  // }
  return (
    <div>
      {/* {chatmessages} */}
      {/* using gord oprator && */}
      {sender === "robot" && (
        <img src="robot.svg" alt="robot img" width="50" />
        )}
      {message}
      {sender === "user" &&(
         <img src="user.svg" alt="user img" width="50" />
         )}
    </div>
  );
}

function App() {
  return (
    <>
      <ChatInput />
      <ChatMessage sender="user" message="hello chatbot" />
      <ChatMessage sender="robot" message="hello! how can i help you?" />
      <ChatMessage sender="user" message="can you get me todays date" />
      <ChatMessage sender="robot" message="today is september 27" />
    </>
  );
}

root.render(<App />);
