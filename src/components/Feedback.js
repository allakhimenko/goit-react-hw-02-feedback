import React from 'react';

export default class Feedback extends React.Component {
  render() {
    return (
      <div>
        <h1>Please leave Your feedback</h1>

        <button>Good</button>
        <button>Neutral</button>
        <button>Bad</button>

        <h2>Statistics</h2>

        <p>Good:</p>
        <p>Neutral:</p>
        <p>Bad:</p>
      </div>
    );
  }
}
