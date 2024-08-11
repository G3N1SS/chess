import PropTypes from 'prop-types'
import './Rook.css'

export default function Rook({ black, position }) {
	return <div className={`figure rook ${black} ${position}`}></div>
}

Rook.propTypes = {
	black: PropTypes.string,
	position: PropTypes.string,
}
