import PropTypes from 'prop-types';
import SectionFeedback from './Section.styled';

const Section = ({ title = '', children }) => {
  return (
    <SectionFeedback>
      <h2>{title}</h2> {children}
    </SectionFeedback>
  );
};
Section.propTypes = {
  title: PropTypes.string,
};
export default Section;
