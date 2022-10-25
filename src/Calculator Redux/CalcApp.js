import React from 'react';
import './calci.css';
import CalculatorApp from './components/calccomponents';
import {store} from './redux/store';
import {Provider} from 'react-redux';



function App() {
  return (
    
    <React.Fragment>  
      <Provider store={store}>
      <CalculatorApp/>  
      </Provider>
    </React.Fragment>
     
       
  
  );
}

export default App;