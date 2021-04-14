import { hot } from "react-hot-loader"
import * as React from "react"
import "./style.css"

const App = () => {
  return(
    <div className="title-box">
      <h1 className="title">Ahoy there, Collectivists! Here be Dragons! Yargh!</h1>
    </div>
  )
}

export default hot(module)(App)