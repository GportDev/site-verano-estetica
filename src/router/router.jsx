import React from "react"
import { Route, HashRouter, Routes } from "react-router-dom"
import HomePage from "../pages/homepage/index.jsx"
import App from "../App"
import VeranoEstetica from "../pages/verano-estetica/index"
import VeranoBronze from "../pages/verano-bronze/index"
import Soprano from "../pages/verano-estetica/platforms/soprano/index.jsx"
import Inkie from "../pages/verano-estetica/platforms/inkie/index.jsx"
import Etherea from "../pages/verano-estetica/platforms/etherea/index.jsx"
import Ultraformer from "../pages/verano-estetica/platforms/ultraformer/index.jsx"
import Natural from "../pages/verano-bronze/tretments/natural/index.jsx"
import Cold from "../pages/verano-bronze/tretments/cold/index.jsx"
import Moon from "../pages/verano-bronze/tretments/moon/index.jsx"


function MyRouter() {
  return (
    <HashRouter>
      <App>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/verano-estetica" element={<VeranoEstetica />}/>
          <Route path="/verano-estetica/soprano" element={<Soprano />}/>
          <Route path="/verano-estetica/etherea" element={<Etherea />}/>
          <Route path="/verano-estetica/inkie" element={<Inkie />}/>
          <Route path="/verano-estetica/ultraformer" element={<Ultraformer />}/>
          <Route path="/verano-bronze" element={<VeranoBronze />}/>
          <Route path="/verano-bronze/bronzeamento-gelado" element={<Cold />}/>
          <Route path="/verano-bronze/bronzeamento-natural" element={<Natural />}/>
          <Route path="/verano-bronze/banho-de-lua" element={<Moon />}/>
        </Routes>
      </App>
    </HashRouter>
  )
}

export default MyRouter