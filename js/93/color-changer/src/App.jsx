import { useState } from 'react'
//import './App.css'

function App() {
  const [bgColor, setBgColor] = useState('white');
  const [txtColor, setTxtColor] = useState('black');
  const [selectedFont, setSelectedFont] = useState('Arial');

  const handleColorChange = (event) => {
    setBgColor(event.target.value);
  };

  const handleTxtColor = (event) => {
    setTxtColor(event.target.value);
  };

  const handleFontChange = (event) => {

    setSelectedFont(event.target.value);

  };

  return (
    <div style={{ fontFamily: selectedFont, backgroundColor: bgColor, height: 679, color: txtColor, transition: 'background-color 0.3s,color 0.3s', textAlign: 'center' }}>
      <h1>Select a color for the background and text</h1>
      <lable style={{ padding: '.5em' }}>background color:
        <input type="color" value={bgColor} onChange={handleColorChange} />
      </lable>

      <lable style={{ padding: '.5em', }}>Text color:
        <input type="color" value={txtColor} onChange={handleTxtColor} />
      </lable>
      <label>Select Font:
        <select onChange={handleFontChange} value={selectedFont} >

          <option value="Arial">Arial</option>

          <option value="Times New Roman">Times New Roman</option>

          <option value="Georgia">Georgia</option>
          <option value="Serif">Serif</option>

        </select>
      </label>
      <h1>HELLO WELCOME TO MY YOUTUBE CHANNEL!!!</h1>
      <h2>PLEASE SUPACAPACAPARIBE!</h2>
    </div >
  )
}

export default App
