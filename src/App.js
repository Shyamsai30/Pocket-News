import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const App = () => {
 const apiKey = "5c78c902339e423291e37b302903b464"
  const [progress, setProgress] = useState(0)
  const [mode, setMode] = useState('Light')

  const toggleMode = () => {
    if (mode === "Light") {
      setMode("Dark");
      document.body.style.backgroundColor = "green";
    }
    else {
      setMode("Light");
      document.body.style.backgroundColor = "white";
    }
  }
  document.body.style.backgroundColor = `${mode === "Dark" ? "black" : "white"}`;
  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <LoadingBar
          height={3}
          color={`${mode === "Dark" ? "white" : "rgb(13, 110, 253)"}`}
          backgroundColor={`${mode === 'Dark' ? 'white' : 'black'}`} progress={progress}
        />
        <Routes>
          <Route exact index element={<News mode={mode} setProgress={setProgress} apiKey={apiKey} key="general" pageSize={8} country="in" category="general" />} />
          <Route exact path='/general' element={<News mode={mode} setProgress={setProgress} apiKey={apiKey} key="general" pageSize={8} country="in" category="general" />} />
          <Route exact path='/business' element={<News mode={mode} setProgress={setProgress} apiKey={apiKey} key="business" pageSize={8} country="in" category="business" />} />
          <Route exact path='/entertainment' element={<News mode={mode} setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={8} country="in" category="entertainment" />} />
          <Route exact path='/health' element={<News mode={mode} setProgress={setProgress} apiKey={apiKey} key="health" pageSize={8} country="in" category="health" />} />
          <Route exact path='/science' element={<News mode={mode} setProgress={setProgress} apiKey={apiKey} key="science" pageSize={8} country="in" category="science" />} />
          <Route exact path='/sports' element={<News mode={mode} setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={8} country="in" category="sports" />} />
          <Route exact path='/technology' element={<News mode={mode} setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={8} country="in" category="technology" />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
