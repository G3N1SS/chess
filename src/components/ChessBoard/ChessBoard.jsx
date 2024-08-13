import Knight from "../Knight/Knight";
import Pawn from "../Pawn/Pawn";
import Rook from "../Rook/Rook";
import Bishop from "../Bishop/Bishop";
import King from "../King/king";
import Queen from "../Queen/Queen";
import "./ChessBoard.css";
import { useState } from "react";

export default function ChessBoard() {
  const [isSelected, setIsSelected] = useState(false);
  function pieces(Element, line) {
	let result = [];
    const alphabet = "abcdefgh";
    for (let i = 0; i < alphabet.length; i++) {
	  result.push(<Element position={alphabet[i] + line} />);
    }
	return result
  }

  function select() {
    if (isSelected) {
      setIsSelected(false);
    } else {
      setIsSelected(true);
    }
  }

  return (
    <div className="wrapper">
      {/* 8 черных пешек */}
      {(function () {
        let result = [];
        const alphabet = "abcdefgh";
        for (let i = 0; i < alphabet.length; i++) {
          result.push(
            <Pawn
              position={alphabet[i] + "7"}
              key={alphabet[i] + "7"}
              black={true}
			  isSelected={isSelected}
			  setIsSelected={setIsSelected}
			  select={select}
            />
          );
        }
        return result;
      })()}

      {/* 8 белых пешек */}
      {(function () {
        let result = [];
        const alphabet = "abcdefgh";
        for (let i = 0; i < alphabet.length; i++) {
          result.push(
            <Pawn position={alphabet[i] + "2"} key={alphabet[i] + "2"} />
          );
        }
        return result;
      })()}

      {/* Rook */}
      <Rook black={"rook_black"} position={"figure_h8"} />
      <Rook black={"rook_black"} position={"figure_a8"} />
      <Rook />
      <Rook position={"figure_h1"} />

      {/* Knight */}
      <Knight black={"knight_black"} position={"figure_b8"} />
      <Knight black={"knight_black"} position={"figure_g8"} />
      <Knight />
      <Knight position={"figure_g1"} />

      {/* Bishop */}
      <Bishop black={"bishop_black"} position={"figure_c8"} />
      <Bishop black={"bishop_black"} position={"figure_f8"} />
      <Bishop />
      <Bishop position={"figure_f1"} />

      {/* Quenn and King */}
      <King black={"king_black"} position={"figure_d8"} />
      <King position={"figure_e1"} />

      <Queen black={"queen_black"} position={"figure_e8"} />
      <Queen />
    </div>
  );
}
