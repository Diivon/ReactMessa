import React, {useState} from 'react';
import Dialog from './Dialog'

function App() {
  return (
  <React.Fragment>
    <div className = "col-md-8 container content-wrapper">
      <h1>TODO</h1>
    </div>
    <Dialog />
  </React.Fragment>
  );
}

export default App;
