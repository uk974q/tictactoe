import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./src/components/Header"
import Board from "./src/components/Board"

const TicTacApp = () => (
    <div>
        <Header />
        <Board />
    </div>
)


let root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<TicTacApp />)