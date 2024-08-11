import PropTypes from 'prop-types'
import './Header.css'

export default function Header({ loggedIn }) {
	return (
		<header className='header'>
			<img src='' alt='' className='header__logo' />
			<div className='header__account account'>
				<button className='account__btn'>
					<img src='' alt='' className='account__btn-img' />
					<p className='account__btn-text'>Аккаунт</p>
				</button>
			</div>
		</header>
	)
}

Header.propTypes = {
	loggedIn: PropTypes.bool,
}
