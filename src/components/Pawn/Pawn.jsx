import PropTypes from 'prop-types'
import './Pawn.css'

export default function Pawn({ black, position }) {
	return <div className={`figure pawn ${black} ${position}`}></div>
}

Pawn.propTypes = {
	black: PropTypes.string,
	position: PropTypes.string,
}
