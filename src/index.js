// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css';

// // import { element } from './jsx/jsx.component';

// ReactDOM.render(
//   <App/>,
//   document.getElementById('root')
// );

import React from 'react';
import ReactDOM from 'react-dom';
// function formatName(user) {
//   return user.firstName + ' ' + user.lastName;
// }

// const user = {
//   firstName: 'Harper',
//   lastName: 'Perez'
// };

// const element = (
//   <h1>
//     Hello, {formatName(user)}!
//   </h1>
// );

// 数字 
// import Game from './component/Game/Game'
// ReactDOM.render(
//   <Game/>,
//   document.getElementById('root')
// );


// todolist 
import App from './react-todo/app.js';
ReactDOM.render(<App/>, document.getElementById("root"));




// redux
import {combineReducers, createStore } from 'redux';

const userReducer = (state={}, action) => {
    switch(action.type) {
        case "CHANGE_NAME": 
            state.name = action.payload;
            break;
        case "CHANGE_AGE": 
            state.age = action.payload
            break;    
    }
    return state;
};
const tweetsReducer = (state=[], action) => state;
// const reducer = function(state, action) {
//     if(action.type === "INC") {
//         return state+1;
//     }
//     return state;
// };
const reducer = combineReducers({
    user: userReducer,
    tweets: tweetsReducer
})
const store = createStore(reducer);
store.subscribe(() => {
    console.log("store changed", store.getState())
});
store.dispatch({type: "CHANGE_NAME", payload: "will"});
store.dispatch({type: "CHANGE_AGE", payload: 20});