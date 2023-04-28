import React, { Component } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';

import css from './App.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  render() {
    return (
      <div className={css.section} >
        <Section title="Please leave feedback">
          <FeedbackOptions/>
        </Section>
      </div>
    );
  }
}
export default App;
