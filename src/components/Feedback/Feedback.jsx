import css from './Feedback.module.css'
import Notification from '../Notification/Notification';
import { useEffect } from 'react';

const Feedback = ({ feedback, totalFeedback }) => {
  const { good, neutral, bad } = feedback;
  const positiveFeedback = totalFeedback === 0 ? 0 : Math.round(((good + neutral) / totalFeedback) * 100);

    useEffect(() => {
    localStorage.setItem('positiveFeedback', positiveFeedback);
  }, [positiveFeedback]);

  if (totalFeedback === 0) {
    return <Notification message="No feedback yet" />;
  }

  return (
      <ul className={css.feedbackList}>
      <li className={css.feedbackCount}>Good: {good}</li>
      <li className={css.feedbackCount}>Neutral: {neutral}</li>
      <li className={css.feedbackCount}>Bad: {bad}</li>
      <li className={css.feedbackCount}>Total: {totalFeedback}</li>
      <li className={css.feedbackCount}>Positive: {positiveFeedback.toFixed(2)}%</li>
    </ul>
  );
};

export default Feedback