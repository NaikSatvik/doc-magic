import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const[mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode == 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode has been enabled", "success");
    }
  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert} />
    <div className="container">
    <TextForm heading="Enter text to Analyze" mode={mode} showAlert={showAlert} />
    {/* <About /> */}
    </div>
    </>
  );
}

export default App;
