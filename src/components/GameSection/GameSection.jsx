import GameGrid from "../GameGrid/GameGrid";
import './gamesection.css'

export default function GameSection({}){
  return(
    <section className="game">
      <h2 className="game__title">Свободные Игры</h2>
      <div className="container container_game">
        <GameGrid/>
        <div className="game__buttons">
          <button className="game__button">Создать игру</button>
          <button className="game__button">Присоединиться к игре</button>
          <button className="game__button">хуй</button>
        </div>
      </div>
    </section>
  )
}