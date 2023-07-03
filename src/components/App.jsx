import { useState } from 'react';
import Notification from './Notification/Notification';
import Statistic from './Statistic/Statistic';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleAddFeedback = evt => {
    const {
      target: { textContent },
    } = evt;
    switch (textContent) {
      case 'good':
        setGood(good + 1);
        return;
      case 'neutral':
        setNeutral(neutral + 1);
        return;
      case 'bad':
        setBad(bad + 1);
        return;
      default:
        return;
    }
  };
  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () =>
    Math.round((good * 100) / (countTotalFeedback() || 1));

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleAddFeedback}
        />
      </Section>
      {countTotalFeedback() ? (
        <Section title="Statistic">
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Section>
          <Notification message="There is no feedback" />
        </Section>
      )}
    </>
  );
};
