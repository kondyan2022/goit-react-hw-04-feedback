import PropTypes from 'prop-types';
import StatisticList from './Statistic.styled';

const Statistic = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatisticList>
      <li>good: {good}</li>
      <li>neutral: {neutral}</li>
      <li>bad: {bad}</li>
      <li>total: {total}</li>
      <li>Positive feedback: {positivePercentage}%</li>
    </StatisticList>
  );
};

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistic;
