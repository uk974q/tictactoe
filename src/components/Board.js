import { useState } from "react"
import Square from "./Square"
import Moves from "./Moves"
import { checkVictory } from "../utils.js/game"

const Board = () => {
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [toggleXO, setToggleXO] = useState("X")
    const [positionNo, setPositionNo] = useState(0) 
    const [moves, setMoves] = useState([])
    const [isWinner, setIsWinner] = useState(false)
    const [winSquares, setWinSquares] = useState([])

    const play = (i) => {
        if(squares[i] || isWinner) return
        let arr = [...squares]
        console.log("Position",positionNo)
        let pos = positionNo + 1
        arr[i] = toggleXO
        setSquares(arr)
        setMoves((move) => {
            move[pos-1] = {squares: arr, mark: toggleXO}
            move.length = pos
            return move
        })
        let {flag, winningSquares} = checkVictory(arr)
        setIsWinner(flag)
        setWinSquares(winningSquares)
        setPositionNo(pos)
        setToggleXO(toggle => (toggle == "X" ? "O" : "X"))
    }

    const goToMove = (i) => {
        let history = moves[i]
        setSquares(history.squares)
        let {flag, winningSquares} = checkVictory(history.squares)
        setIsWinner(flag)
        setWinSquares(winningSquares)
        if(!flag){
            setPositionNo(i+1)
            let mark = (history.mark == "X" ? "O" : "X")
            setToggleXO(mark)
        }
    }

    return(
        <>
            <div className="grid grid-cols-[repeat(3,100px)] grid-rows-[repeat(3,100px)] justify-center mt-5 ">
                {squares.map((el,i) => (
                    <Square key={el+i} value={el} handleClick={() => play(i)} squareNo={i} winSquares = {winSquares}/>
                ))}
            </div>
            {isWinner ? (<h1 className="font-bold my-4 text-3xl flex justify-center">Winner is {toggleXO == "X" ? "O" : "X"}</h1>) : null}
            <div className="mt-3 flex flex-wrap justify-center items-center">
                {moves.map((el,i) => (
                    <Moves value={i} key={i} currentMove = {positionNo} handleMove={() => goToMove(i)}/>
                ))}
            </div>
        </>

    )
}

export default Board