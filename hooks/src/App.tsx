import React from 'react';
import './App.css';
import Section from './components/Section';
import ClassCounter from './components/ClassCounter';
import InputCounter from './components/InputCounter';
import Effect from './components/Effect';
import EffectOnce from './components/EffectOnce';
import MoreOnEffects from './components/MoreOnEffects';
import DataCall from './components/DataCall';
import DataCallBtn from './components/DataCallBtn';

const App: React.FC = () => {
  return (
    <div className="App">
      <Section title={"Using newState to increment counter"}>
        <ClassCounter />
      </Section>

      <Section title={"Using newState to update inputs"}>
        <InputCounter />
      </Section>

      <Section title={"Using effect update document title"}>
        <Effect />
      </Section>

      <Section title={"ComponentDidMount"}>
        <EffectOnce />
      </Section>

      <Section title={"More on effects"}>
        <MoreOnEffects />
      </Section>

      <Section title={"Fetch Data Using Effects"}>
        <DataCall />
      </Section>

      <Section title={"Fetch Data Using Effects w/ Btn"}>
        <DataCallBtn />
      </Section>

    </div>
  );
}

export default App;
