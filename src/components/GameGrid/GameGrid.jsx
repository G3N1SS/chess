import GameCard from "../GameCard/GameCard";
import './gamegrid.css'

export default function GameGrid({ data }) {
  return (
    <div className="card-section">
      <GameCard/>
      <GameCard/>
      <GameCard/>
      <GameCard/>
      <GameCard/>
      <GameCard/>
    </div>
  );
}
