import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import logoProfile from '../../img/logo-profile.png'
import logo from '../../img/logo.png'
import setting from '../../img/setting-ico.png'
import './Header.css'

export default function Header() {
	return (
		<header className='header'>
			<div className='container container_header'>
				<div className='header__wrapper-left'>
					<img src={logo} alt='' className='header__logo' />
					<h1 className='header__title'>Pig chess</h1>
				</div>
				<div className='header__wrapper-right'>
					<button className='account__btn'>
						<img src={logoProfile} className='account__btn-img' />
						<p className='account__btn-text'>Профиль</p>
					</button>
					<div className='header__settings'>
						<img className='header__logo-settings' src={setting} alt='#' />
						<Link className='header__link-settings' t='/settings'>
							Settings
						</Link>
					</div>
				</div>
			</div>
		</header>
	)
}

Header.propTypes = {
	loggedIn: PropTypes.bool,
}
