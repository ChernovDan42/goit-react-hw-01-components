import css from './TransactionHistory.module.css'
import PropTypes from 'prop-types'


export const TransactionHistory = ({ items }) => {
    return (
        <table className={ css.table }>
           <thead>
              <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
               </tr>
            </thead>

            <tbody>
                {items.map(transaction => {
                    return (
                         <tr key={transaction.id}>
                            <td>{ transaction.type }</td>
                            <td>{ transaction.amount}</td>
                            <td>{ transaction.currency }</td>
                         </tr>
                    )
                })}

            </tbody>

            

        </table>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired, 
            amount: PropTypes.string.isRequired,
            currency:PropTypes.string.isRequired,
        })
    )  
         }

