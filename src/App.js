import React from 'react'
import Homepage from './components/Homepage'
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Homepage/>
      <Projects/>
      <div className="credits">
        <h4>Credits:</h4>
        <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> and <a href="" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> </div>
      </div>
    </div>
  );
}

export default App;
