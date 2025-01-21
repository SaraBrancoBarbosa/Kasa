import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Layout from "./layouts/Layout"
import Homepage from "./pages/homepage/Homepage"
import Rental from "./pages/rental/Rental"
import About from "./pages/about/About"
import Error from "./pages/error/Error"

const AppRouter = () => {
    return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />}/>
          <Route path="about" element={<About />} />
          <Route path="rental/:id" element={<Rental />} />
          <Route path="error" element={<Error />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
    )
}

export default AppRouter