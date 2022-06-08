import React from "react";

type Props = {
    value: "" | "X" | "O";
    pos: Array<number>;
    setSquareValue: Function;
    setCurrentTurn: Function;
    currentTurn: number;
};

const Square = ({ value, pos, setSquareValue, setCurrentTurn, currentTurn }: Props) => {

    // const userValue = currentTurn === 1 ? 'X' : 'O';

    const handleClick = () => {
        if (value !== '') return;

        setSquareValue(pos);

        if (currentTurn === 1) {
            setCurrentTurn(2);
        } else {
            setCurrentTurn(1);
        }
    };

    return (
        <div
            className="square flexDirectionCenter noselect"
            onClick={() => handleClick()}
        >
            {value}
        </div>
    );
};

export default Square;
