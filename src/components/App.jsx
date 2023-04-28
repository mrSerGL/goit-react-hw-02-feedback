import React, { Component } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';

import css from './App.module.css';

class App extends Component {
  // static defaultState = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handlerGoodBtn = () => {
    // console.log(prevState);
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  onLeaveFeedback = {
    handlerGoodBtn: this.handlerGoodBtn,
  };

  render() {
    return (
      <div className={css.section}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            // options={this.state}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics options={this.state}></Statistics>
        </Section>
      </div>
    );
  }
}
export default App;
