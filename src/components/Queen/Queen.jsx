import PropTypes from 'prop-types'
import './Queen.css'

export default function Queen({ black, position }) {
	return <div className={`figure queen ${black} ${position}`}></div>
}

Queen.propTypes = {
	black: PropTypes.string,
	position: PropTypes.string,
}
