import React from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';

export default class Feedback extends React.Component {
  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };

  onLeaveFeedback = () => {
    this.setState(prev => {
      return { good: prev.good + 1 };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return (good / (good + neutral + bad)) * 100;
  };

  render() {
    return (
      <div>
        <h1>Please leave Your feedback</h1>
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.onLeaveFeedback()}
        />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage().toFixed(1)}
        />
      </div>
    );
  }
}
