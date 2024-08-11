import PropTypes from 'prop-types'
import './Bishop.css'

export default function Bishop({ black, position }) {
	return <div className={`figure bishop ${black} ${position}`}></div>
}

Bishop.propTypes = {
	black: PropTypes.string,
	position: PropTypes.string,
}
