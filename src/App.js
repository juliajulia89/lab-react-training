import React from 'react';
import PeopleList from './components/PeopleList';
import Greetings from './components/Greetings';
import Random from "./components/Random";
import BoxColor from "./components/BoxColor"

function App() {
  return (
    <div classNanme="App">
      <PeopleList />
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <Random min={1} max={6} />
      <Random min={1} max={100} />
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
    </div>
  );
}

export default App;
