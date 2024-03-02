import css from './transactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionTable}>
      <thead className={css.trTableHead}>
        <tr className={css.trHeadList}>
          <th className={css.trHeadItem}>Type</th>
          <th className={css.trHeadItem}>Amount</th>
          <th className={css.trHeadItem}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.trTableBody}>
        {items.map((item) => (
          <tr key={item.id} className={css.trBodyList}>
            <td className={css.trBodyItem}>{item.type}</td>
            <td className={css.trBodyItem}>{item.amount}</td>
            <td className={css.trBodyItem}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
