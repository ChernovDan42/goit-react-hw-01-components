import css from './Statistics.module.css'
import PropTypes from 'prop-types'



export const Statistic = ({ label, percentage ,color }) => {
    return (
        <li className={css.item} style={color} >
            <span className="label">{ label }</span>
            <span className="percentage">{ percentage }%</span>
    </li>
    )
}

Statistic.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
    color:PropTypes.objectOf(PropTypes.string),
}