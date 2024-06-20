import React from "react" //allowa us to add state to components for state management.
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Favourites from "./pages/User/Favorites"
import History from "./pages/User/History"
import AuthRequired from "./components/AuthRequired"
import Layout from "./components/Layout"
import Explore from "./pages/Explore"
import Login from "./pages/Login"
import Logout from "./pages/Logout"

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/explore" element={<Explore />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
        </Route>

        <Route element={<AuthRequired />}>
          <Route path="/favorites" element={<Favourites />} />
          <Route path="/history" element={<History />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />)