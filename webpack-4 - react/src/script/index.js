require('./../css/index.css');
require('./../less/index.less');
require('./../less/common.less');
import React from 'react';
import ReactDom from 'react-dom';
import { VelocityComponent } from 'velocity-react';
import { createStore } from 'redux';

const reducer = (state = 2, action) => {
    if(action.type){
        switch (action.type){
            case 'INCREMENT': return action.text;
            case 'DECREMENT': return state - 1;
            default: return state;
        } 
    }
    else if(action){

    } 
}
const store = createStore(reducer);


const Counter = ({value, onIncre}) => (
    <div>
        <div>{value}</div>
        <button onClick = {onIncre}>+</button>
        <button >-</button>
    </div>
);


const name = "sss";
const render = () => {
    ReactDom.render(
        <Counter 
            value = {store.getState()}
            onIncre = {() => store.dispatch({type: 'INCREMENT', text: 'ASK'})}
        />,
        document.getElementById("root")
    );
}
render();
store.subscribe(render);






