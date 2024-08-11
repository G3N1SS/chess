import PropTypes from 'prop-types'
import './Knight.css'

export default function Knight({black,position}) {
	return <div className={`figure knight ${black} ${position}`}></div>
}
Knight.propTypes = {
	black: PropTypes.string,
	position: PropTypes.string,
}
