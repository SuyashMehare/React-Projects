import { useState } from "react";
import { Board } from "./Board";

export const Game = () =>{

   
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove,setCurrentMove] = useState(0)


    const currentSquares = history[currentMove]
    const xIsNext = currentMove%2 === 0;


    const moves = history.map((squares,move) => {

        let discription;

        if(move > 0){
            discription = `Go to the move : ${move}`
        }
        else{
            discription = `Go to game start`
        }

        return (
            <li key={move}>
                <button onClick={() => jumpOn(move)}>{discription}</button>    
            </li>
        )
    })


    function handlePlay(nextSquares) {

        const nextHistory = [...history.slice(0,currentMove+1),nextSquares]

        setHistory(nextHistory)
        setCurrentMove(nextHistory.length-1)
    }
    

    function jumpOn(nextMove){

        setCurrentMove(nextMove)
    }


    return (
        <>
            <div className="game">
                <div className="game-board">
                    <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
                </div>
                <div className="game-info">
                    <ol>{moves}</ol>
                </div>
            </div>
        </>
    )
}