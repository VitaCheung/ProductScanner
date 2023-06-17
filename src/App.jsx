import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
// import the library
import { library } from '@fortawesome/fontawesome-svg-core'
// import icons
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

import Header from "./components/Header";
import Home from "./routes/Home";
import Scanner from "./routes/Scanner";
import About from "./routes/About";
import Login from "./routes/Login";
import SavedItems from "./routes/SavedItems";
import Nav from "./components/Nav";




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/scanner" element={<Scanner />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/saveditems" element={<SavedItems />} />
        </Routes>
        <Nav />
        <p id="copyright">Copyright&copy; 2023 Vita Cheung</p>
      </BrowserRouter>
    </div>
  )
}

export default App
library.add(fab, fas, far)
