import React, {useState} from 'react';
import './App.css';
import AdForm from './components/AdForm';
import AdComponent from './components/AdComponent';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

function App() {

  const [form, setValues] = useState({CTA: 'Click Here',})

  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <h1>React Ad Studio</h1>
        </header>
        <main>
          <AdForm form={form} setValues={setValues}/>
          <AdComponent form={form}/>
        </main>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
