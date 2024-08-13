import Knight from "../Knight/Knight";
import Pawn from "../Pawn/Pawn";
import Rook from "../Rook/Rook";
import Bishop from "../Bishop/Bishop";
import King from "../King/king";
import Queen from "../Queen/Queen";
import "./ChessBoard.css";
import { useState } from "react";

export default function ChessBoard() {
  const [isActive, setIsActive] = useState(false);
  function pieces(Element, line) {
    let result = [];
    const alphabet = "abcdefgh";
    for (let i = 0; i < alphabet.length; i++) {
      result.push(<Element position={alphabet[i] + line} />);
    }
    return result;
  }
  function active() {
    if (isActive) {
      setIsActive(false);
    } else {
      setIsActive(true);
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
              active={() => active()}
              isActive={isActive}
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
            <Pawn
              position={alphabet[i] + "2"}
              key={alphabet[i] + "2"}
              active={() => active()}
              isActive={isActive}
            />
          );
        }
        return result;
      })()}

      {/* Rook */}
      <Rook black={"rook_black"} position={"figure_h8"} />
      <Rook black={"rook_black"} position={"figure_a8"} />
      <Rook position={"figure_a1"}/>
      <Rook position={"figure_h1"} />

      {/* Knight */}
      <Knight black={"knight_black"} position={"figure_b8"} />
      <Knight black={"knight_black"} position={"figure_g8"} />
      <Knight position={"figure_b1"}/>
      <Knight position={"figure_g1"} />

      {/* Bishop */}
      <Bishop black={"bishop_black"} position={"figure_c8"} />
      <Bishop black={"bishop_black"} position={"figure_f8"} />
      <Bishop position={"figure_c1"}/>
      <Bishop position={"figure_f1"} />

      {/* Quenn and King */}
      <King black={"king_black"} position={"figure_d8"} />
      <King position={"figure_d1"} />

      <Queen black={"queen_black"} position={"figure_e8"} />
      <Queen position={"figure_e1"}/>
    </div>
  );
}
