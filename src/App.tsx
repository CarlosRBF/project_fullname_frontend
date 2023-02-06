import "./components/Styles/reset.css"
import "./components/Styles/style.css"
import "./App.css"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { Routes, Route, Navigate } from "react-router-dom"
import { Home } from "./pages/Home"
import { Dashboard } from "./pages/Dashboard"

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
