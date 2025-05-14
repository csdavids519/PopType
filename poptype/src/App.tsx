import { useState } from 'react'
import { faker } from '@faker-js/faker';
import RestartButon from './components/RestartButton';


const words = faker.lorem.words(10);

function App() {
  return (
  <>
    <CountdownTimer timeLeft={30} />;
    <GeneratedWords words={words} />;
    <RestartButon
      className={'mx-auto mt-10 text-slate-500'}
      onRestart={() => null}
    />
  </>
  );
};


const GeneratedWords = ({ words }: { words: string }) => {
  return <div className="text-4xl text-center text-slate-600">{words}</div>;
};


const CountdownTimer = ({ timeLeft }: { timeLeft: number }) => {
  return <h2 className="text-amber-300 font-medium">Time: {timeLeft}</h2>
}

export default App
