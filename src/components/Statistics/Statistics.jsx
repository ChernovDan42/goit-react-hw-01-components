import css from './Statistics.module.css'
import PropTypes from 'prop-types'
import { Statistic } from './Statistic'
import { getRandomHexColor } from './getRandomColor'




export const Statistics = ({stats,title}) => {
    return (
      
        <section className={css.statistics}>
            <h2 className={css.title}>{ title }</h2>
            
            <ul className={css.statList}>
                {stats.map(stat => {
                    const color = {
    backgroundColor:getRandomHexColor(),
}
                    return(
                    <Statistic key={stat.id} label={ stat.label } percentage={stat.percentage} color={color}  />)
            })}
            </ul>

            </section>

    )
}

Statistics.propTypes = {
    title: PropTypes.string.isRequired, 
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage:PropTypes.number.isRequired, 
         })
        
    )
}