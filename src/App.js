import logo from './logo.svg';
import './App.css';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {configurestore} from './redux/configurestore';

const store = configurestore;

function App() {
  return (
    <Provider store={store}>
       <BrowserRouter>
    <div>
      <Main></Main>
    </div>
    </BrowserRouter>
    </Provider>
   
  );
}

export default App;
