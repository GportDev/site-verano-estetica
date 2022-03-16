import React from "react"
import { Route, HashRouter, Routes } from "react-router-dom"
import HomePage from "../pages/homepage/index.jsx"
import App from "../App.jsx"
import VeranoEstetica from "../pages/verano-estetica/index.jsx"
import VeranoBronze from "../pages/verano-bronze/index.jsx"


function MyRouter() {
  return (
    <HashRouter>
      <App>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="#/verano-estetica" element={<VeranoEstetica />}/>
          <Route path="#/verano-bronze" element={<VeranoBronze />}/>
        </Routes>
      </App>
    </HashRouter>
  )
}

export default MyRouter