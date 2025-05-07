import Message from './Message'
import './App.css'

function App() {
  const messageText = "Привет, мир!"; // Константа с текстом

  return (
    <>
      <div>
        <h1>my-react-app</h1>
        <Message text={messageText} />
      </div>
    </>
  )
}

export default App