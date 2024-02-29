import { useEffect, useState } from "react"
import {Square} from "./Square"
import "./style.css"
// import { isWinner } from "./Winner"

export const Board = ({ xIsNext, squares , onPlay ,}) => {
    
    let winner = whoIsWinner(squares);

    if(winner == null){
        winner = "Play Next Move"
    }
    else{
        winner = `Winner is ${winner}`
    }

    function handleClick(i){

        
        if(whoIsWinner(squares) || squares[i]){
           return 
        }

        let nextSquares = squares.slice();

        if(xIsNext){
            nextSquares[i] = "X"
        }
        else{
            nextSquares[i] = "O"
        }

        onPlay(nextSquares)
    }

    return(
        <>  

            <div>{winner}</div>
            <div className="board-row">

                <Square nextValue={squares[0]} handleClickInBoard = {() => handleClick(0)}/>
                <Square nextValue={squares[1]} handleClickInBoard = {() => handleClick(1)}/>
                <Square nextValue={squares[2]} handleClickInBoard = {() => handleClick(2)}/>
            </div>

            <div className="board-row">
                <Square nextValue={squares[3]} handleClickInBoard = {() => handleClick(3)}/>
                <Square handleClickInBoard = {() => handleClick(4)} nextValue={squares[4]}/>
                <Square handleClickInBoard = {() => handleClick(5)} nextValue={squares[5]}/>
            </div >

            <div className="board-row">
                <Square handleClickInBoard = {() => handleClick(6)} nextValue={squares[6]}/>
                <Square handleClickInBoard = {() => handleClick(7)} nextValue={squares[7]}/>
                <Square handleClickInBoard = {() => handleClick(8)} nextValue={squares[8]}/>
            </div>
            
        </>
    )
}   


function whoIsWinner(squares){

    let lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    for(let i=0; i < lines.length ; i++){

        const [a,b,c] = lines[i];

        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
            return squares[a];
        }

    }

    return null;
}