import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Homepage from "./pages/homepage/Homepage"
import Rental from "./pages/rental/Rental"
import About from "./pages/about/About"
import Error from "./pages/error/Error"

const AppRouter = () => {
    return (
    <Router>
      <Routes>

        <Route index element={<Homepage />}/>
        <Route path="/about" element={<About />} />
        <Route path="/rental" element={<Rental />} />
        <Route path="/*" element={<Error />} />

      </Routes>
    </Router>
    )
}

export default AppRouter