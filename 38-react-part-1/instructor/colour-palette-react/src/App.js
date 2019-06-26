import React from 'react';

const App = () => {

  const style = {
    backgroundColor: `rgb(0, 0, 0)`
  }

  return (
    <ul className="palette">
      <li className="swatch" style={style}>
        <div>rgb(</div>
        <div className="channel">
          <button type="button" className="btn up">+</button>
          <input type="text" className="txt" value="0" />
          <button type="button" className="btn down">-</button>
        </div>
        <div className="channel">
          <button type="button" className="btn up">+</button>
          <input type="text" className="txt" value="0" />
          <button type="button" className="btn down">-</button>
        </div>
        <div className="channel">
          <button type="button" className="btn up">+</button>
          <input type="text" className="txt" value="0" />
          <button type="button" className="btn down">-</button>
        </div>
        <div>);</div>
      </li>
    </ul>
  );
}

export default App;
