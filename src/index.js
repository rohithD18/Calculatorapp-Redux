import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";


// import TodoApp from "./To Do Redux/TodoApp";
// import { Provider } from "react-redux";
// import store from './To Do Redux/redux/store';

// import CalcApp from './Calculator Redux/CalcApp';


import ComponentWeather from './Weather Redux/componentweather';
import { Provider } from "react-redux";
import store from './Weather Redux/storeWeather';


// import TodoApp from './REDUX TODO/App';
// import { Provider } from "react-redux";
// import store from "./REDUX TODO/store";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    {/* <CalcApp /> */}
 
   <Provider store={store}>
     <React.StrictMode>
      
       {/* <TodoApp />
       
       <App /> */}
       <ComponentWeather />
     </React.StrictMode>
      </Provider>
   <div>
    {/* <React.StrictMode>
    <Provider store={store}>
    
    <TodoApp />
    
    </Provider>
    </React.StrictMode>     */}
   </div>
  </div>


);
