const Moves = ({value, currentMove, handleMove}) => {
    return(
        <button className={`rounded-lg bg-slate-200 p-3 text-xl mr-2 mt-2 hover:bg-green-300 ${currentMove == value+1? "bg-yellow-300" : ""}`} onClick={handleMove}>Move {value+1}</button>
    )
}

export default Moves