import React from "react";

type Props = {
    value: "" | "X" | "O";
    pos: Array<number>;
    setSquareValue: Function;
    winner: number | null;
};

const Square = ({ value, pos, setSquareValue, winner }: Props) => {

    const handleClick = () => {
        if (value !== '' || winner) return;
        setSquareValue(pos);
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
