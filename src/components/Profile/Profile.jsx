import { useState } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import './Profile.css'

const Profile = () => {
	const [userName, setUserName] = useState('user name')
	const [userRating, setUserRating] = useState(0)
	const [userCountry, setUserCountry] = useState('user Country')
	const [dataRegister, setDataRegister] = useState('data Register')
	const [userCounterGame, setUserCounterGame] = useState(0)
	const [isOnline, setIsOnline] = useState(true)
	const [gameResult, setGameResult] = useState('win white')

	return (
		<>
			<Header />
			<main className='profile'>
				<div className='container profile__container'>
					<div className='profile__info'>
						<h3 className='profile-name'>{userName}</h3>
						<p className='profile-country'>{userCountry}</p>
						<p className='profile-data-register'>{dataRegister}</p>
						<p className='profile-online'>{isOnline ? 'Online' : 'Ofline'}</p>
						<div className='profile-games'>{`Количество игр: ${userCounterGame}`}</div>
					</div>

					<div className='profile-game'>
						<h3 className='profile-game__title'>{`Ваши последнии игры ${userCounterGame}`}</h3>
						<div className='profile-game-block'>
							<img src='' alt='#' className='profile-game-block' />
							<p className='profile-game-block__name'>Время игры</p>
							<p className='profile-game-block__vs'>User1 VS User2</p>
							<p className='profile-game-block__rating '>
								{userRating} {userRating}
							</p>
							<p className='profile-game-block__result'>{gameResult}</p>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	)
}

export default Profile
