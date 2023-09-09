import { POSSIBLE_WINS } from "./constants";

export const checkVictory = (squares) => {
    let flag = false
    let winningSquares = new Set()
    for (let i = 0; i < POSSIBLE_WINS.length; i++) {
    const [a, b, c] = POSSIBLE_WINS[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        POSSIBLE_WINS[i].forEach(el => winningSquares.add(el))
        flag = true
    }
    }
    winningSquares = Array.from(winningSquares)
    return {flag, winningSquares}
}

