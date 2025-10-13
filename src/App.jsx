import CheckOut from "./pages/CheckOut"
import Homepage from "./pages/Homepage"
import { Routes, Route } from "react-router"
import Orders from "./pages/OrderPage"
import Tracking from "./pages/TrackingPage"
function App() {
  return (
    <Routes>
      <Route index element={< Homepage />} /> 
      <Route path="/checkout" element={<CheckOut />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/tracking" element={<Tracking />} />
    </Routes> 
  )
}
export default App
