import PropTypes from 'prop-types';
import ButtonFeedback from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(option => (
        <ButtonFeedback type="button" onClick={onLeaveFeedback} key={option}>
          {option}
        </ButtonFeedback>
      ))}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
