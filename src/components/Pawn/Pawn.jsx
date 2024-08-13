import PropTypes from "prop-types";
import "./Pawn.css";
import { useEffect, useState } from "react";
import Hint from "../Hint/Hint";

export default function Pawn({ black, position, active, isActive}) {
  const [isFirstSelect, setIsFirstSelect] = useState(true);
  const [isSelected, setIsSelected] = useState(false);
  const [square, setSquare] = useState(position);

  console.log(isSelected,isActive)

  function select(e) {
    if (isSelected) {
      setIsSelected(false);
      e.target.c
    } else {
      setIsSelected(true);
    }
  }

  function movePieceBlack(num) {
    if (isFirstSelect) {
      setSquare(square[0] + +(square[1] - num));
      setIsFirstSelect(false);
    } else {
      setSquare(square[0] + +(square[1] - num));
    }
  }

  return (
    <>
    <div
      className={`figure pawn ${black && "pawn_black"} figure_${square}`}
      onClick={() => {select(); active(); }}
    >
      {/* <div
        className={`${
          isSelected && isFirstSelect
            ? "pawn_selected_black-two"
            : isSelected && "pawn_selected_black-one"
        }`}
        onClick={() => {
          movePieceBlack(2);
		      setIsSelected(false);
        }}
      ></div>
      <div
        className={`${isSelected && "pawn_selected_black-one"}`}
        onClick={() => {
          movePieceBlack(1);
		      setIsSelected(false);
        }}
      ></div> */}
    </div>
    <Hint/>
    </>
  );
}

Pawn.propTypes = {
  black: PropTypes.bool,
  position: PropTypes.string,
};
