// import clsx from "clsx";
import css from './TransactionHistory.module.css'
// import transactions from '../../transactions.json'


export default function TransactionHistory({items}) {
    return (
            <table className={css.container}>
                <thead className={css.table}>
                    <tr>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Currency</th>
                    </tr>
                </thead>
                <tbody className={css.container}>
                {items.map(({ id, type, amount, currency }) => {
          return ( 
                        <tr key={id}>
                            <td>{type}</td>
                            <td>{amount}</td>
                            <td>{currency}</td>
                        </tr>
                )})}
                </tbody>
            </table>
    )}
