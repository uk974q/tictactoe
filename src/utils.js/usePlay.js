const usePlay = () => {
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [toggleXO, setToggleXO] = useState("X")
    const [positionNo, setPositionNo] = useState(0) 
    const [moves, setMoves] = useState([])
    const [isWinner, setIsWinner] = useState(false)
    const [winSquares, setWinSquares] = useState([])
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
    // if(!flag){
        setPositionNo(pos)
        setToggleXO(toggle => (toggle == "X" ? "O" : "X"))
    // }
}

export default usePlay