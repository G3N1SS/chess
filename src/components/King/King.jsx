import PropTypes from 'prop-types'
import './King.css'

export default function King({ black, position }) {
	return <div className={`figure king ${black} ${position}`}></div>
}

King.propTypes = {
	black: PropTypes.string,
	position: PropTypes.string,
}
