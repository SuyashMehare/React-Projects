import { useEffect, useState } from "react";
import { Board } from "./Board";

export const Game = () =>{

    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove,setCurrentMove] = useState(0)
    const [trackMoves, setTrackMoves] = useState(); 

    const currentSquares = history[currentMove]
    const xIsNext = currentMove%2 === 0;
   
    // setting up btn's on window for time travel
    let moves = history.map((squares,move) => {

        let discription;

        if(move > 0){
            discription = `Go to the move : ${move}`
        }
        else{
            discription = `Reset`
        }

        return (
            <li key={move}>
                <button onClick={() => jumpOn(move)}>{discription}</button>    
            </li>
        )
    })
    

    useEffect(() => {
        setTrackMoves(moves);
    },[history])


    function handlePlay(nextSquares) {

        const nextHistory = [...history.slice(0,currentMove+1),nextSquares]

        setHistory(nextHistory)
        setCurrentMove(nextHistory.length-1)
    }
    

    function jumpOn(nextMove){

        setCurrentMove(nextMove)
    }


    function sort() {

        setTrackMoves(Object.values(trackMoves).reverse())

    }

    return (
        <>
            <div className="game">
                <div className="game-board">
                    <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
                </div>
                <div className="game-info">

                    <button onClick={sort}>Sort ⬇⬆</button>
                    <ol>
                        {trackMoves}
                    </ol>
                </div>
            </div>
        </>
    )
}