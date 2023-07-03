import PropTypes from 'prop-types';
import ParagraphNotify from './Notification.styled';

const Notification = ({ message }) => {
  return <ParagraphNotify>{message}</ParagraphNotify>;
};

Notification.propTypes = {
  message: PropTypes.string,
};
export default Notification;
