import PropTypes from "prop-types";
import "./Pawn.css";
import { useEffect, useState } from "react";

export default function Pawn({ black, position, isSelected, setIsSelected, select }) {
  const [isFirstSelect, setIsFirstSelect] = useState(true);
  const [square, setSquare] = useState(position);
  console.log(square);

  function movePieceBlack(num) {
    if (isFirstSelect) {
      setSquare(square[0] + +(square[1] - num));
      setIsFirstSelect(false);
    } else {
      setSquare(square[0] + +(square[1] - num));
    }
  }

  return (
    <div
      className={`figure pawn ${black && "pawn_black"} figure_${square}`}
      onClick={(e) => e.currentTarget(select)}
    >
      <div
        className={`${
          isSelected && isFirstSelect
            ? "pawn_selected_black-two"
            : isSelected && "pawn_selected_black-one"
        }`}
        onClick={() => {
          movePieceBlack(2);
        }}
      ></div>
      <div
        className={`${isSelected && "pawn_selected_black-one"}`}
        onClick={() => {
          movePieceBlack(1);
        }}
      ></div>
    </div>
  );
}

Pawn.propTypes = {
  black: PropTypes.bool,
  position: PropTypes.string,
};
