import { useState, useEffect } from 'react';
import './App.css'
import css from './App.module.css'
import Options from './components/Options/Options'
import Feedback from './components/Feedback/Feedback'

const App = () => {
  const initialFeedback = JSON.parse(localStorage.getItem('feedback')) || { good: 0, neutral: 0, bad: 0 };
  const [feedback, setFeedback] = useState(initialFeedback);

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
    localStorage.setItem('totalFeedback', totalFeedback);
  }, [feedback, totalFeedback]);

  return (
    <div>
      <h1 className={css.feedbackTitle}>Sip Happens Café</h1>
      <p className={css.feedbackDesc}>Please leave your feedback about our service by selecting one of the options below.</p>
      <Options setFeedback={setFeedback} totalFeedback={totalFeedback} />
      <Feedback feedback={feedback} totalFeedback={totalFeedback}/>
    </div>
  );
};

export default App;

// const savedFeedback = JSON.parse(localStorage.getItem('feedback'));
// const savedPositive = JSON.parse(localStorage.getItem('positiveFeedback'));
// const savedTotalFeedback = JSON.parse(localStorage.getItem('totalFeedback'));

// console.log('Saved Feedback:', savedFeedback);
// console.log('Saved Positive:', savedPositive);
// console.log('Saved Total Feedback:', savedTotalFeedback);
