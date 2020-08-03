import React from 'react';

import { Switch } from './components/Switch/Switch';

function App() {
  return (
    <div className="App">
      <Switch label="Checkbox checked" checked={true} />
      <br/>
      <Switch label="Checkbox disabled" disabled />
      <br/>
      <Switch label="Checkbox" />
      <br/>
      <Switch label="Checkbox with label in left side" labelPosition="left" />
    </div>
  );
}

export default App;
