import React, { useState } from "react";
import Square from './Square';

// 3x3 grid of buttons
// Once there is a row of X/O, then the game is over

// TODO: Every time a new button is clicked, then run the function that checks all 8 winning combos
    // If one is found, then end game and assign the winner

type value = '' | 'X' | 'O';
type Props ={
    setCurrentTurn: Function;
    currentTurn: number;
}

const TicTacToe = ({setCurrentTurn, currentTurn}: Props) => {

    const userValue = currentTurn === 1 ? 'X' : 'O';

    const [game, setGame] = useState<value[][]>([['', '', ''],['', '', ''],['', '', '']]);

    const setSquareValue = (pos: Array<number>) => {
        game[pos[0]][pos[1]] = userValue;
    }

    const renderGame = () => {
        let res = [];
        for (let row = 0; row < game.length; row++) {
            for (let col = 0; col < game[row].length; col++) {
                res.push(
                <Square key={`${row} ${col}`} 
                    value={game[row][col]} 
                    pos={[row, col]}
                    setSquareValue={setSquareValue}
                    currentTurn={currentTurn} 
                    setCurrentTurn={setCurrentTurn} 
                />)
            }
        }

        return res;
    }

    return (
        <div className="ticTacToe">
            {renderGame()}
        </div>
    )
};

export default TicTacToe;
