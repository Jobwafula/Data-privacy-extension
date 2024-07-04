import { BrowserRouter ,Routes,Route} from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Home from "./pages/Home"
import SimpleAlert from "./components/SimpleAlert"
import { useState } from "react"
export default function App() {
  const [showNotification,setShowNotification] = useState(false)
  const handleNotification = ()=>{
    setShowNotification(true)
  }
  return (
    <div className="">
      {showNotification && <SimpleAlert />}
      <Home  showNotification={handleNotification} />
      {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Dashboard" element={<Dashboard />}></Route>
      </Routes>
      </BrowserRouter> */}
    </div>
  )
  }

