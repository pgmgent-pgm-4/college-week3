import { Alert, AlertDanger, AlertSuccess, AlertWarning, Dialog, SplitPane } from './components';

import './App.css';

function App() {
  return (
    <div className="app">
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
