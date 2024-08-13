import { useState } from 'react'

import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import ProfileCart from '../ProfileCart/ProfileCart'
import './Profile.css'

const Profile = () => {
	const [userName, setUserName] = useState('DuckHacker')
	const [dataRegister, setDataRegister] = useState('4 июня 1976 год')
	const [userCounterGame, setUserCounterGame] = useState(0)
	const [isOnline, setIsOnline] = useState(true)

	return (
		<>
			<Header />
			<main className='profile'>
				<div className='profile__info-block'>
					<div className='profile__info'>
						<img
							src='http://www.flag.kremlin.ru/static/img/svg/flag.svg?e6efb77a91'
							alt=''
							className='profile-country'
						/>
						<h3 className='profile-name'>{userName}</h3>
						<p className='profile-data-register'>{dataRegister}</p>
						<p className='profile-online'>{isOnline ? 'Online' : 'Ofline'}</p>
						<div className='profile-games'>
							{`Количество игр: ${userCounterGame}`}
						</div>
					</div>
				</div>

				<div className='profile__game-block'>
					<div className='profile-line'></div>
					<h3 className='profile__game__title'>{`История ваших игр ${userCounterGame}`}</h3>
					<ProfileCart />
					<ProfileCart />
					<ProfileCart />
				</div>
			</main>
			<Footer />
		</>
	)
}

export default Profile
