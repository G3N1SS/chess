import { useState } from 'react'
import chessProfile from '../../img/chess-profile.png'
import './ProfileCart.css'

const ProfileCart = () => {
	const [gameResult, setGameResult] = useState('Победа белых')
	return (
		<>
			<div className='profile__game-cart'>
				<div className='profile__game-cart__up-block'>
					<p id='kostyl'></p>
					<p>Игроки</p>
					<p>Результат</p>
					<p>Ходы</p>
					<p>Дата</p>
				</div>

				<div className='profile__game-cart-main'>
					<img src={chessProfile} alt='#' className='profile__game-block-img' />
					<p className='profile__game-block__vs'>
						Oleg bobrov
						<br /> DuckHacker
					</p>
					<p className='profile-game-block__result'>{gameResult}</p>
					<p className='profile-game-block__move'>2</p>
					<p className='profile-game-block__data'>
						2 Дня назад <br /> 14:20
					</p>
				</div>
			</div>
		</>
	)
}

export default ProfileCart
