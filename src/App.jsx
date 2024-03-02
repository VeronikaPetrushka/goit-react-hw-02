import { useState, useEffect } from 'react';
import './App.css'
import Description from './components/Description/Description';
import Options from './components/Options/Options'
import Feedback from './components/Feedback/Feedback'

const App = () => {
  const initialFeedback = JSON.parse(localStorage.getItem('feedback')) || { good: 0, neutral: 0, bad: 0 };
  const [feedback, setFeedback] = useState(initialFeedback);

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = totalFeedback === 0 ? 0 : Math.round(((feedback.good + feedback.neutral) / totalFeedback) * 100);

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
    localStorage.setItem('totalFeedback', totalFeedback);
    localStorage.setItem('positiveFeedback', positiveFeedback);
  }, [feedback, totalFeedback, positiveFeedback]);

  return (
    <div>
      <Description />
      <Options setFeedback={setFeedback} totalFeedback={totalFeedback} />
      <Feedback feedback={feedback} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback} />
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
