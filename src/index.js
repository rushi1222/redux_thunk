import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { apiReducer, counterReducer } from './reducer/reducer';
import { applyMiddleware, createStore,combineReducers } from 'redux';
import { Provider } from 'react-redux/es/exports';
import logger from 'redux-logger';
import thunk from 'redux-thunk'

const root = ReactDOM.createRoot(document.getElementById('root'));

// const myLogger =(store)=> (next)=>(action)=>{
//   console.log("applyMiddleware ran")
//         return next(action)

// }; 
// const secondMiddlewear  =(store)=> (next)=>(action)=>{
//   console.log("secondMiddlewear ran")
//         return next(action)

// };
// const capATen =(store)=> (next)=>(action)=>{
//          if (store.getState()>= 10){
//           return next({type: "DECREMENT"})
//          }
//          return next(action)
// };
// const myLogger = (store)=>{
//   return (next)=>{
//     return(action)=>{
//       console.log("middlewear running")
//       return next(action)
//     };
//   };
   
// };
const reducer = combineReducers({
  count: counterReducer,
  fetchRequest :apiReducer

})
const store = createStore(reducer,applyMiddleware(thunk));
console.log(counterReducer)
root.render(
  <React.StrictMode>
    <Provider store = {store}>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
