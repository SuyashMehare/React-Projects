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

    function createSquares(from, to){

        let cols = []
        let rows= [] 

        for(let index = from ; index <= to ; index++) {

            cols.push(<Square key={index} nextValue={squares[index]} 
                        handleClickInBoard = {() => handleClick(index)}/>)

            if((index+1)%3 == 0){
                rows.push(<div key={rows.length+1} className="board-row">{cols}</div>)
                cols = []
            }            
        }

        return rows
    }

    
    return(
        <>  

            <div>{winner}</div>
            {createSquares(0,8)}       
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