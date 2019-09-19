import React from 'react';
import './App.css';
import Section from './components/Section';
import ClassCounter from './components/ClassCounter';
import InputCounter from './components/InputCounter';

const App: React.FC = () => {
  return (
    <div className="App">
      <Section title={"Using newState to increment counter"}>
        <ClassCounter />
      </Section>
      <Section title={"Using newState to update inputs"}>
        <InputCounter />
      </Section>
    </div>
  );
}

export default App;
