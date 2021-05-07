import './App.css';

import { Alert, AlertDanger, AlertSuccess, AlertWarning, Dialog, SplitPane } from './components';

import RandomBeer from './components/RandomBeer';
import RandomCoffee from './components/RandomCoffee';
import RandomCrypto from './components/RandomCrypto';
import RandomVehicle from './components/RandomVehicle';
import TeamMembers from './components/TeamMembers';

function App() {
  return (
    <div className="app">
      <RandomBeer/>
      <RandomCoffee/>
      <RandomCrypto/>
      <RandomVehicle/>
      <TeamMembers/>
      <Alert />
      <AlertWarning />
      <AlertDanger />
      <AlertSuccess />
      <Dialog title="Updated the post with id 12345">
        <p>Updated the post with id 12345</p>
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/Aceera_Nederlandse_asperge_wit_363_2316.jpg" />
      </Dialog>
      <SplitPane left={<Dialog title="Polleke"/>} right={<Dialog title="Svelte"/>}>
        <h2>That was a kewl lecture</h2>
      </SplitPane>
    </div>
  );
}

export default App;
