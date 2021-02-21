import PropTypes from "prop-types";

const TransactionHistory = ({ props }) => (
  <table className="transaction-history">
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      {props.map((transition) => (
        <tr key={transition.id}>
          <td>{transition.type}</td>
          <td>{transition.amount}</td>
          <td>{transition.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  props: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TransactionHistory;
