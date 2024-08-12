import { Link } from 'react-router-dom'
import chess from '../../img/chess-board.jpeg'
import timeicon from '../../img/icontime.png'
import './gamecard.css'

export default function GameCard({}){
  return(
    <div className="card">
      
      <Link to ='/chess'><img src={chess} alt="" className="card__img" /></Link>
      <div className="card__banner banner">
        <div className="banner__information">
          <h4 className="banner__player">Игрок1</h4>
          <p className="banner__rating">6969</p>
        </div>
        <div className="banner__time">
          <img src={timeicon} alt="" className="banner__time-icon" />
          <p className="banner__time-count">1:00</p>
        </div>
      </div>
    </div>
  )
}