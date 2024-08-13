import draw from '../../img/draw.png'
import reverse from '../../img/reverse.png'
import surrender from '../../img/surrender.png'
import './ChessMenu.css'

const ChessMenu = () => {
	return (
		<>
			<div className='menu-wrapper'>
				<h3 className='menu-wrapper__player'>Great Blaze (рейтинг)</h3>

				<div className='menu-wrapper__counter'>
					<div className='menu-wrapper__counter-block'>
						<p className='menu-wrapper__counter-number'>1</p>
						<div className='menu-wrapper__counter-white'>e4</div>
						<div className='menu-wrapper__counter-black'>e5</div>
					</div>

					<div className='menu-wrapper__counter-block'>
						<p className='menu-wrapper__counter-number'>2</p>
						<div className='menu-wrapper__counter-white'>K f3</div>
						<div className='menu-wrapper__counter-black'>d6</div>
					</div>
				</div>

				<div className='menu-wrapper__app'>
					<div className='menu-wrapper__app-surender'>
						<button className='menu-wrapper__app-surender__btn'>
							<img src={surrender} alt='' />
						</button>

						<button className='menu-wrapper__app-surender__btn'>
							<img src={draw} alt='' />
						</button>

						<button className='menu-wrapper__app-surender__btn'>
							<img src={reverse} alt='' />
						</button>
					</div>
				</div>

				<h3 className='menu-wrapper__player'>DuckHacker (рейтинг)</h3>
			</div>
		</>
	)
}

export default ChessMenu
