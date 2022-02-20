import React from "react"
import { Route, BrowserRouter, Routes } from "react-router-dom"
import HomePage from "../pages/homepage/homepage"
import App from "../App"
import VeranoEstetica from "../pages/verano-estetica/verano-estetica"
import VeranoBronze from "../pages/verano-bronze/verano-bronze"


function MyRouter() {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/verano-estetica" element={<VeranoEstetica />}/>
          <Route path="/verano-bronze" element={<VeranoBronze />}/>
        </Routes>
      </App>
    </BrowserRouter>
  )
}

export default MyRouter