import React, { useState } from "react";
import Square from './Square';

// 3x3 grid of buttons
// Once there is a row of X/O, then the game is over
type value = '' | 'X' | 'O';
type Props ={
    setCurrentTurn: Function;
    currentTurn: number;
    winner: number | null;
    setWinner: Function;
}

const TicTacToe = ({setCurrentTurn, currentTurn, setWinner, winner}: Props) => {

    const userValue = currentTurn === 1 ? 'X' : 'O';

    const [game, setGame] = useState<value[][]>([['', '', ''],['', '', ''],['', '', '']]);

    const setSquareValue = (pos: Array<number>) => {
        game[pos[0]][pos[1]] = userValue;

        checkWinner();

        if (currentTurn === 1) {
            setCurrentTurn(2);
        } else {
            setCurrentTurn(1);
        }
    }

    // Function that iterates through all 8 winning combos to see if there is a winner
    // Yes, it's a slow algorithm. No, I will not improve it for this app
    const checkWinner = () => {
        let res = false;
        for (let i = 0; i < 3; i++) {
            res = res || checkRow(game[i]);
        }

        for (let j = 0; j < 3; j++) {
            res = res || checkRow([game[0][j], game[1][j], game[2][j]]);
        }

        // Diagonals
        res = res || checkRow([game[0][0], game[1][1], game[2][2]]);
        res = res || checkRow([game[0][2], game[1][1], game[2][0]]);

        if (res) {
            setWinner(currentTurn);
        }

    }

    const checkRow = (row: value[]) => {
        for (let i = 0; i < row.length; i++) {
            if (row[i] !== userValue) return false;
        }
        return true;
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
                    winner={winner}
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
