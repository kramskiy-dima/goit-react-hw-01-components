import PropTypes from "prop-types";
import s from "./TransactionHistory.module.css";

const TransactionHistory = ({ props }) => (
  <table className={s.transactionHistory}>
    <thead>
      <tr className={s.title}>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      {props.map((transition) => (
        <tr key={transition.id}>
          <td className={s.current}>{transition.type}</td>
          <td className={s.amount}>{transition.amount}</td>
          <td className={s.current}>{transition.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  props: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TransactionHistory;
