import Homepage from "./pages/Homepage"
import { Routes, Route } from "react-router"
function App() {
  return (
    <Routes>
      <Route index element={< Homepage />} /> 
      <Route path="/checkout" element={<div>Hello</div>} />
    </Routes>
  )
}

export default App
