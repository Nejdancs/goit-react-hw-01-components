import PropTypes from 'prop-types';
import {
  Transaction,
  Head,
  BodyRow,
  BodyData,
  HeadData,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Transaction>
      <Head>
        <tr>
          <HeadData>Type</HeadData>
          <HeadData>Amount</HeadData>
          <HeadData>Currency</HeadData>
        </tr>
      </Head>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <BodyRow key={id}>
            <BodyData>{type}</BodyData>
            <BodyData>{amount}</BodyData>
            <BodyData>{currency}</BodyData>
          </BodyRow>
        ))}
      </tbody>
    </Transaction>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};
