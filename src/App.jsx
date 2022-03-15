import React from "react"
import { GlobalStyle } from "./components/globalStyle"

function App(props) {

  return (
    <main>
      <GlobalStyle />
      {props.children}
    </main>
  )
}

export default App
