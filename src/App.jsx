import Navbar from "./components/Navbar"
import ChatRoom from "./pages/ChatRoom"
import Login from "./pages/Login"

function App() {
  return (
    <div data-theme="dark">
      <Navbar />
      {/*<Login />*/}
      <ChatRoom />
    </div>
  )
}

export default App
