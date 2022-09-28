import React, { useState, useEffect } from 'react';

function App() {
  const [keyVal, setKeyVal] = useState('');
  const [asciiVal, setAsciiVal] = useState();
  useEffect(() => {
    if (keyVal.match(/[a-z]/)) {
      document.addEventListener("keypress", function(event) {
        setKeyVal(event.key);
        setAsciiVal(event.which);
      });
    } else {
      document.addEventListener("keydown", function(event) {
        setKeyVal(event.key);
        setAsciiVal(event.which);
      });
    }
  }, [keyVal]);
  
  return (
    <div className="App">
      <h3 style={{ display: 'flex', justifyContent: 'center' }}>Please select key</h3>
      <h1 style={{ display: 'flex', justifyContent: 'center', fontSize: '100px' }}>{keyVal}</h1>
      <h2 style={{ display: 'flex', justifyContent: 'center', fontSize: '100px' }}>{asciiVal}</h2>
    </div>
  );
}

export default App;
