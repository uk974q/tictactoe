const Square = ({value, handleClick, squareNo, winSquares}) => {
    
    return(
        <div className={`flex items-center justify-center border-2 p-2 border-black cursor-pointer text-2xl font-bold hover:bg-slate-100 ${winSquares.includes(squareNo) ? 'bg-green-400' : ''}`} onClick={handleClick}>{value}</div>
    )
}

export default Square
